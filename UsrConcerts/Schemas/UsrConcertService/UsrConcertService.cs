namespace Terrasoft.Configuration.UsrConcertService {
    using System;
    using System.Collections.Generic;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrConcertService : BaseService {

    [OperationContract]
    [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
    ResponseFormat = WebMessageFormat.Json)]
    public int GetPerformanceDetail(string code) {
    // Query to get the UsrConcert Id based on the provided code
    var concertQuery = new Select(UserConnection)
                                          .Column("Id")
                                        .From("UsrConcerts")
                                        .Where("UsrConcertCode").IsEqual(Column.Parameter(code))
                                        as Select;

    Guid concertId = concertQuery.ExecuteScalar<Guid>();
    if (concertId == Guid.Empty) {
        return -1; // Return an empty list if no concert found
    }

      // Query to get the performance details
      var performanceQuery = new Select(UserConnection)
                                                     .Column(Func.Count("Id")).As("Count")
                                                  .From("UsrPerformanceDetail")
                                                  .Where("UsrParentConcertId").IsEqual(Column.Parameter(concertId))
                                                as Select;

      int result = performanceQuery.ExecuteScalar <int> ();

      return result;// Return the list of performance details
}


        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample() {
            return "OK!";
        }
    }

}
