namespace Terrasoft.Configuration.UsrAnonymousConfigurationServiceNamespace {
    using System;
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core;
    using Terrasoft.Web.Common;
    using Terrasoft.Core.Entities;

    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrAnonymousConfigurationService: BaseService {
        /* The link to the UserConnection instance required to access the database. */
        private SystemUserConnection _systemUserConnection;
        private SystemUserConnection SystemUserConnection {
            get {
                return _systemUserConnection ?? (_systemUserConnection = (SystemUserConnection) AppConnection.SystemUserConnection);
            }
        }

        /* The method that returns the contact ID by the contact name. */
        [OperationContract]
        [WebInvoke(Method = "GET", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped,
            ResponseFormat = WebMessageFormat.Json)]
        public string GetContactIdByName(string Name) {
            /* Specify the user on whose behalf to process the HTTP request. */
            SessionHelper.SpecifyWebOperationIdentity(HttpContextAccessor.GetInstance(), SystemUserConnection.CurrentUser);
            /* The default result. */
            var result = "";
            /* The EntitySchemaQuery instance that accesses the Contact database table. */
            var esq = new EntitySchemaQuery(SystemUserConnection.EntitySchemaManager, "Contact");
            /* Add columns to the query. */
            var colId = esq.AddColumn("Id");
            var colName = esq.AddColumn("Name");
            /* Filter the query data. */
            var esqFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Name", Name);
            esq.Filters.Add(esqFilter);
            /* Retrieve the query results. */
            var entities = esq.GetEntityCollection(SystemUserConnection);
            /* If the service receives data. */
            if (entities.Count > 0) {
                /* Return the "Id" column value of the first query result record. */
                result = entities[0].GetColumnValue(colId.Name).ToString();
                /* You can also use this option:
                result = entities[0].GetTypedColumnValue<string>(colId.Name); */
            }
            /* Return the results. */
            return result;
        }
    }

}