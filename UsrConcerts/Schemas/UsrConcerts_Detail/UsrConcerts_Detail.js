define('UsrConcerts_Detail', [], function () {
	return {
		entitySchemaName: 'UsrConcerts',
		details: /**SCHEMA_DETAILS*/ {} /**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/ [] /**SCHEMA_DIFF*/,
		methods: {
           init: function() {
                this.callParent(arguments);
                this.loadSystemSettings();

                console.log("testtinnnggg >>>>");
            },
        },
	};
});
