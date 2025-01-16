 namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "UsrConcerts")]
  
    public class UsrConcertCodeServerSideValidation : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity concert = (Entity)sender;
            decimal code = concert.GetTypedColumnValue<decimal>("UsrConcertCode");
            if (code > 1000)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(concert.UserConnection.ResourceStorage,
                    "UsrConcertCodeServerSideValidation", "LocalizableStrings.ValueIsTooBig.Value").ToString();

                string message = string.Format(messageTemplate, "1000");
                throw new Exception(message);
            }
        }
    }
}