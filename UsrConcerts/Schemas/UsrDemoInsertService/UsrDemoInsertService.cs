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
    }
}