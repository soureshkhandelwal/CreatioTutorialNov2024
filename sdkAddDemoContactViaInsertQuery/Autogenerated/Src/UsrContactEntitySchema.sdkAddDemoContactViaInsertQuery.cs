namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrContactEntitySchema

	/// <exclude/>
	public class UsrContactEntitySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrContactEntitySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrContactEntitySchema(UsrContactEntitySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ba44b5dd-7dfe-4435-adcb-a2c279e8b430");
			Name = "UsrContactEntity";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("d14a0cf6-7cca-4f55-8d72-b787f9a3b1a6");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,146,75,79,2,65,12,199,239,38,126,135,113,79,144,144,249,0,18,15,128,72,212,0,137,96,56,24,15,195,110,193,137,59,15,167,93,226,198,240,221,237,176,203,203,7,204,97,179,211,254,219,254,218,142,85,6,208,171,20,196,20,66,80,232,22,36,123,206,46,244,178,8,138,180,179,242,25,67,175,64,114,102,180,147,126,93,94,8,62,5,106,187,20,147,18,9,76,251,183,137,243,228,57,164,49,9,202,1,88,8,58,253,75,54,129,176,210,41,12,93,6,249,57,191,156,193,252,172,166,195,53,87,27,248,35,233,97,131,1,78,184,228,109,247,31,47,87,103,133,49,39,51,203,190,37,77,26,144,53,149,234,165,198,227,193,82,80,41,189,214,230,14,250,17,16,39,244,76,59,215,185,166,242,9,62,10,29,192,128,37,108,28,94,98,107,226,70,156,9,137,42,89,27,178,102,93,199,23,243,92,167,34,205,21,162,136,235,100,12,166,216,96,150,226,90,116,21,66,77,24,87,91,5,109,0,199,30,170,87,240,131,124,227,228,97,220,219,149,123,135,198,16,232,205,101,76,151,12,250,211,164,37,186,46,43,39,84,230,17,152,85,67,64,84,75,216,89,229,44,40,239,33,107,237,147,197,19,177,1,233,206,5,163,232,40,178,50,201,7,116,182,197,50,244,252,162,224,180,174,121,64,90,247,143,20,226,178,6,64,253,79,101,124,14,141,230,246,37,111,79,0,42,130,21,201,248,241,42,105,239,93,235,234,119,29,103,195,159,111,144,199,170,225,52,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ba44b5dd-7dfe-4435-adcb-a2c279e8b430"));
		}

		#endregion

	}

	#endregion

}

