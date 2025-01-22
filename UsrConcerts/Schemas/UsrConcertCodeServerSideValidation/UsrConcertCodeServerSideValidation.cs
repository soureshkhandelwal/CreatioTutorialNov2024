using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.DB;
using Terrasoft.Common;

namespace Terrasoft.Configuration
{
    [EntityEventListener(SchemaName = "UsrConcerts")] // Bind to the UsrConcerts schema
    public class UsrConcertEventListener : BaseEntityEventListener {
        
      public override void OnUpdating(object sender, EntityBeforeEventArgs e) {
            base.OnSaving(sender, e);

            var entity = (Entity)sender;
            var userConnection = entity.UserConnection;

            // Get the value of UsrConcertCode
            var concertCode = entity.GetTypedColumnValue<string>("UsrConcertCode");   // fetching current concert-code

            // Check if UsrConcertCode is empty
            if (string.IsNullOrEmpty(concertCode)) {
                throw new Exception("Concert Code cannot be empty.");
            }

            // Create an ESQ to check for duplicate code (except for the current record if updating)
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrConcerts");
          
            esq.AddColumn("Id"); // Select the 'Id' column to count records
          
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcertCode", concertCode));
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.NotEqual, "Id", entity.PrimaryColumnValue));

            // Execute ESQ to get count of records
            var recordCount = esq.GetEntityCollection(userConnection).Count;

            if (recordCount > 0)
            {
                throw new Exception("Concert Code already exists.");
            }
        }

        // public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
        //     base.OnDeleting(sender, e);
        //     throw new Exception("Deletion of records is restricted for this entity.");
        // }

        public override void OnInserting(object sender, EntityBeforeEventArgs e) {
            base.OnInserting(sender, e);
            
            var entity = (Entity)sender;
            var userConnection = entity.UserConnection;
          
              // Get the value of UsrConcertCode
            var concertCode = entity.GetTypedColumnValue<string>("UsrConcertCode");   // fetching current concert-code

            // Check if UsrConcertCode is empty
            if (string.IsNullOrEmpty(concertCode)) {
                throw new Exception("Concert Code cannot be empty.");
            }

            // Create an ESQ to check for duplicate code (except for the current record if updating)
            var esq = new EntitySchemaQuery(userConnection.EntitySchemaManager, "UsrConcerts");
          
            esq.AddColumn("Id"); // Select the 'Id' column to count records
          
            esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcertCode", concertCode));

            // Execute ESQ to get count of records
            var recordCount = esq.GetEntityCollection(userConnection).Count;

            if (recordCount > 0)
            {
                throw new Exception("Concert Code already exists.");
            }


            // ----------------------------------- Application Number -----------------------------------
            // Generate a custom concert code, for example, by combining a prefix and the current timestamp
            string applicationNumber = "CON" + DateTime.UtcNow.ToString("yyyyMMddHHmmssfff");
          
            // Set the generated code to the UsrConcertCode column
            entity.SetColumnValue("UsrCustomNumberViaEvents", applicationNumber);

          }
    }
}
