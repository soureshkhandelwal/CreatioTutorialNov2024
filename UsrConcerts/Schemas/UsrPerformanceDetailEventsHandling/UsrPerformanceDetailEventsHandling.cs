using System;
using Terrasoft.Core;
using Terrasoft.Core.Entities;
using Terrasoft.Core.Entities.Events;
using Terrasoft.Core.DB;
using Terrasoft.Common;

namespace Terrasoft.Configuration
{
    [EntityEventListener(SchemaName = "UsrPerformanceDetail")] // Bind to the UsrPerformanceDetail schema
    public class UsrPerformanceDetailEventListener : BaseEntityEventListener
    {
        public override void OnDeleting(object sender, EntityBeforeEventArgs e) {
            base.OnDeleting(sender, e);
            throw new Exception("Deletion of records is restricted for this entity.");          
        }
    }
}
