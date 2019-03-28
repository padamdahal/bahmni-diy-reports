// Configuration for reports
/* Available config options
var config = {
	"_analysis Delivery Details":{
		derivedAttributes: {},
		hiddenAttributes: [],
		hiddenFromAggregators: [],
		hiddenFromDragDrop:[],
		menuLimit: 500,
		cols: [],
		rows: [],
		vals: [],
		rowOrder: "key_a_to_z",
		colOrder: "key_a_to_z",
		exclusions: {},
		inclusions: {},
		unusedAttrsVertical: 85,
		autoSortUnusedAttrs: false,
		showUI: true,
		sorters: {},
		inclusionsInfo: {},
		aggregatorName: "Count",
		rendererName: "Table"
	}
}
*/

var config = {
	"Delivery Note": {
		"hiddenFromDragDrop":["User", "Systolic pressure", "Diastolic"],
	},
	"Death Note": {
		"hiddenFromDragDrop":["User", "Systolic pressure", "Diastolic"],
		"cols": ["Primary Cause of Death"],
		"rows": ["Patient Name"]
	},
	"Procedure Notes": {
		"cols": ["Gender"],
		"rows": ["Diagnosis"]
	}
}