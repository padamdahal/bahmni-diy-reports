/* Available config options
var config = {
	"_analysis Delivery Details":{
		derivedAttributes: {},
		hiddenAttributes: [],
		hiddenFromAggregators: [],
		hiddenFromDragDrop:[],
		menuLimit: 5000,
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
		"menuLimit": 5000
	},
	"Death Note": {
		"hiddenFromDragDrop":["User", "Systolic pressure", "Diastolic"],
		"cols": ["Primary Cause of Death"],
		"rows": ["Patient Name"]
	},
	"Procedure Notes": {
		"cols": ["Gender"],
		"rows": ["Diagnosis"]
	},
	"Department Report": {
		"cols": ["Visit Type"],
		"rows": ["Value"]
	},
	"Delivery Obs Report": {
		"cols": ["Concept Name","Value"],
		"rows": [],
		"rendererOptions":{
			"table":{
				"colTotals": false,
				"rowTotals": false
			}
		}
	}
	
}