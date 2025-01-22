 namespace Terrasoft.Configuration.UsrDemoTableService {
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Newtonsoft.Json;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
   using Terrasoft.Core.Entities;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrDemoInsertService : BaseService {

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]

        public string InsertDemo(string name, string timestamp, string remarks){
            // Generate a new Guid for the Id
            Guid newId = Guid.NewGuid();
            
            var ins = new Insert(UserConnection)
                            .Into("demo")
                            .Set("Id", Column.Parameter(newId)) // Insert the generated Id
                            .Set("Name", Column.Parameter(name))
                            .Set("EmpId", Column.Parameter(timestamp))
                            .Set("Remarks", Column.Parameter(remarks));
          
            var affectedRows = ins.Execute();
            var result = $"Inserted new contact with name '{name}'. {affectedRows} rows affected";
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
            ResponseFormat = WebMessageFormat.Json)]
        public string SelectDemo(string id) {
            string CreateJson(IDataReader dataReader) {
                var list = new List<Dictionary<string, object>>();
                while (dataReader.Read()) {
                    var record = new Dictionary<string, object>();
                    for (int i = 0; i < dataReader.FieldCount; i++) {
                        string fieldName = dataReader.GetName(i);
                        object fieldValue = dataReader.IsDBNull(i) ? null : dataReader.GetValue(i);
                        record.Add(fieldName, fieldValue);
                    }
                    list.Add(record);
                }
                return JsonConvert.SerializeObject(list); // Returns final JSON string.
            }
        
            var result = "{}";
        
            Guid parentConcert;
            if (!Guid.TryParse(id, out parentConcert)) {
                return JsonConvert.SerializeObject(new { error = "Invalid GUID format" });
            }
        
            var performanceQuery = new Select(UserConnection)
                .Column(Column.Asterisk())
                .From("UsrPerformanceDetail")
                .Where("UsrParentConcertId").IsEqual(Column.Parameter(parentConcert))
                as Select;
        
            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
                using (IDataReader dataReader = performanceQuery.ExecuteReader(dbExecutor)) {
                    result = CreateJson(dataReader); // JSON is created here.
                }
            }
        
            return result; // Return JSON string directly, without additional serialization.
        }

    }
}