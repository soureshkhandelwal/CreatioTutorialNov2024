namespace Terrasoft.Configuration.UsrConcertService {
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
    public class UsrConcertService : BaseService {

        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
        ResponseFormat = WebMessageFormat.Json)]
        public string GetPerformanceDetail(string code) {
            // Query to get the UsrConcert Id based on the provided code
            var concertQuery = new Select(UserConnection)
                                                .Column("Id")
                                                .From("UsrConcerts")
                                                .Where("UsrConcertCode").IsEqual(Column.Parameter(code))
                                                as Select;

            Guid concertId = concertQuery.ExecuteScalar<Guid>();
            if (concertId == Guid.Empty) {
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
            var performanceQuery = new Select(UserConnection)
                                                    .Column(Column.Asterisk())
                                                    .From("UsrPerformanceDetail")
                                                    .Where("UsrParentConcertId").IsEqual(Column.Parameter(concertId))
                                                    as Select;

            using (DBExecutor dbExecutor = UserConnection.EnsureDBConnection()) {
                using (IDataReader dataReader = performanceQuery.ExecuteReader(dbExecutor)) {
                    result = CreateJson(dataReader);
                }
            }
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample() {
            return "OK!";
        }
    }
}