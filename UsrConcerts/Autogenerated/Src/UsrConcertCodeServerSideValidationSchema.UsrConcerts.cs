namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrConcertCodeServerSideValidationSchema

	/// <exclude/>
	public class UsrConcertCodeServerSideValidationSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrConcertCodeServerSideValidationSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrConcertCodeServerSideValidationSchema(UsrConcertCodeServerSideValidationSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("8c6a3f71-efef-4bc1-bb49-a9d8e36c14dd");
			Name = "UsrConcertCodeServerSideValidation";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6d0c237d-57b1-409b-9f16-ec1c0b4f0d63");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,209,106,219,48,20,125,47,244,31,46,126,178,33,136,236,181,221,10,77,200,70,161,116,48,187,123,25,123,80,228,27,87,195,146,140,174,156,46,27,253,247,93,89,206,146,56,29,235,125,177,117,117,238,209,57,71,2,43,13,82,39,21,66,133,222,75,114,155,32,150,206,110,116,211,123,25,180,179,151,23,191,47,47,128,171,39,109,27,40,119,20,208,92,31,183,142,7,141,113,246,159,155,30,197,202,6,29,52,210,91,48,98,181,69,27,246,208,111,67,123,55,244,238,53,139,176,232,243,82,61,161,145,15,236,1,62,64,246,72,158,165,43,244,129,178,226,123,28,75,163,93,191,110,181,2,213,74,34,56,128,150,174,198,18,253,22,125,169,107,252,42,91,93,15,142,225,10,22,146,240,149,243,18,221,152,199,17,179,99,14,207,28,176,117,186,134,207,182,148,91,246,149,187,245,15,84,1,8,109,141,126,6,137,112,129,27,54,57,208,222,250,134,0,139,3,221,17,115,172,53,171,16,127,217,246,52,88,92,159,194,18,47,168,228,138,131,200,83,167,72,19,19,116,141,74,27,217,50,188,142,161,141,83,226,19,134,106,215,97,189,116,109,111,44,135,209,227,251,17,122,147,103,167,161,101,83,5,122,3,249,192,119,3,239,230,243,121,113,186,59,113,21,11,197,29,45,37,19,182,88,179,136,224,123,100,202,115,28,5,31,31,8,63,81,146,13,86,104,186,86,134,40,219,226,51,220,59,197,119,246,75,174,91,44,7,92,190,55,243,72,24,245,90,78,159,239,83,124,65,114,189,87,140,114,158,105,102,231,231,196,202,254,255,50,178,25,100,103,167,146,24,210,186,163,202,185,133,110,210,42,43,68,229,70,85,197,27,172,177,165,212,16,31,157,55,50,228,19,203,124,112,76,246,44,249,88,225,201,187,231,33,145,213,79,133,93,20,186,31,159,194,95,14,203,241,151,63,47,127,0,33,20,45,43,5,4,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("3a9a418b-29fc-2997-fd41-3faa6917a2ab"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("6d0c237d-57b1-409b-9f16-ec1c0b4f0d63"),
				CreatedInSchemaUId = new Guid("8c6a3f71-efef-4bc1-bb49-a9d8e36c14dd"),
				ModifiedInSchemaUId = new Guid("8c6a3f71-efef-4bc1-bb49-a9d8e36c14dd")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("8c6a3f71-efef-4bc1-bb49-a9d8e36c14dd"));
		}

		#endregion

	}

	#endregion

}

