namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrPerformanceDetailEventsHandlingSchema

	/// <exclude/>
	public class UsrPerformanceDetailEventsHandlingSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrPerformanceDetailEventsHandlingSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrPerformanceDetailEventsHandlingSchema(UsrPerformanceDetailEventsHandlingSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("88a67937-754b-427d-ad7d-0050be24a6c6");
			Name = "UsrPerformanceDetailEventsHandling";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6d0c237d-57b1-409b-9f16-ec1c0b4f0d63");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,144,77,75,195,64,16,134,239,129,252,135,33,167,6,36,189,91,60,24,219,155,168,80,61,137,135,237,230,77,187,146,204,150,153,77,107,17,255,187,219,68,105,11,17,135,133,157,157,143,231,157,157,78,29,175,105,121,208,128,118,150,38,93,255,124,134,136,81,95,135,226,206,11,254,8,23,11,14,46,56,232,127,249,98,177,3,135,63,203,230,229,104,166,109,61,199,68,154,176,105,161,91,99,113,145,230,218,173,59,49,193,121,78,147,207,52,161,104,175,189,226,161,151,187,119,241,71,12,153,44,237,6,173,121,136,16,186,161,236,69,229,9,82,123,105,13,91,204,17,140,107,178,252,141,166,83,42,29,87,20,60,133,13,104,172,140,180,39,13,82,219,110,213,56,75,182,49,170,163,213,23,67,208,53,149,70,49,50,222,64,251,153,255,12,236,119,241,175,174,2,237,188,171,232,145,231,104,16,226,138,38,126,245,14,27,72,193,21,228,138,6,100,137,40,142,30,124,43,107,37,228,231,200,163,173,162,124,113,134,249,237,71,62,187,44,12,27,241,123,98,236,105,241,97,177,61,238,119,146,13,109,158,201,215,36,176,94,42,37,167,209,213,32,206,6,84,20,245,99,107,140,161,31,168,200,242,217,137,121,82,248,26,220,120,197,243,13,147,32,239,150,123,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("88a67937-754b-427d-ad7d-0050be24a6c6"));
		}

		#endregion

	}

	#endregion

}

