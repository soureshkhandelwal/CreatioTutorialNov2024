 namespace Terrasoft.Configuration.UsrContactConcertDetailService {
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

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrContactConcertDetailService : BaseService {

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]
      
        public string GetConcertDetail(Guid contactId) {
            if (contactId == Guid.Empty) {
                return JsonConvert.SerializeObject(new List<Dictionary<string, object>>()); // Return an empty list if no concert found
            }

            // Method to create JSON from IDataReader
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
                return JsonConvert.SerializeObject(list);
            }

            var result = "{}";

            // Query to get the performance details
            var fetchConcertQuery = new Select(UserConnection)
                                                            .Column(Column.Asterisk())
                                                          .From("UsrConcerts")
                                                          .Where("UsrOwnerId").IsEqual(Column.Parameter(contactId))
                                                          as Select;

            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
                using (IDataReader dataReader = fetchConcertQuery.ExecuteReader(dbExecutor)) {
                    result = CreateJson(dataReader);
                }
            }
            return result;
        }

    }
}