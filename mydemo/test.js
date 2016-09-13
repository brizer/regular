var token = [{
	"type": "TAG_OPEN",
	"value": "input",
	"pos": 0
}, {
	"type": "OPEN",
	"value": "if",
	"pos": 7
}, {
	"type": "!",
	"value": "!",
	"pos": 12
}, {
	"type": "IDENT",
	"value": "disabled",
	"pos": 13
}, {
	"type": "END",
	"pos": 21
}, {
	"type": "NAME",
	"value": "r-model",
	"pos": 23
}, {
	"type": "=",
	"value": "=",
	"pos": 30
}, {
	"type": "STRING",
	"value": "hello",
	"pos": 31
}, {
	"type": "OPEN",
	"value": "else",
	"pos": 39
}, {
	"type": "END",
	"pos": 45
}, {
	"type": "NAME",
	"value": "disabled",
	"pos": 47
}, {
	"type": "CLOSE",
	"value": "if",
	"pos": 56
}, {
	"type": ">",
	"value": ">",
	"pos": 62
}, {
	"type": "TEXT",
	"value": " ",
	"pos": 63
}, {
	"type": "EXPR_OPEN",
	"escape": false,
	"pos": 64
}, {
	"type": "IDENT",
	"value": "hello",
	"pos": 65
}, {
	"type": "END",
	"pos": 70
}, {
	"type": "TEXT",
	"value": "     ",
	"pos": 71
}, {
	"type": "TAG_OPEN",
	"value": "button",
	"pos": 76
}, {
	"type": "NAME",
	"value": "on-click",
	"pos": 84
}, {
	"type": "=",
	"value": "=",
	"pos": 92
}, {
	"type": "EXPR_OPEN",
	"escape": false,
	"pos": 93
}, {
	"type": "IDENT",
	"value": "disabled",
	"pos": 94
}, {
	"type": "=",
	"value": "=",
	"pos": 103
}, {
	"type": "!",
	"value": "!",
	"pos": 105
}, {
	"type": "IDENT",
	"value": "disabled",
	"pos": 106
}, {
	"type": "END",
	"pos": 114
}, {
	"type": ">",
	"value": ">",
	"pos": 115
}, {
	"type": "EXPR_OPEN",
	"escape": false,
	"pos": 116
}, {
	"type": "IDENT",
	"value": "disabled",
	"pos": 117
}, {
	"type": "?",
	"value": "?",
	"pos": 125
}, {
	"type": "STRING",
	"value": "active",
	"pos": 127
}, {
	"type": ":",
	"value": ":",
	"pos": 135
}, {
	"type": "STRING",
	"value": "disable",
	"pos": 137
}, {
	"type": "END",
	"pos": 146
}, {
	"type": "TEXT",
	"value": " it",
	"pos": 147
}, {
	"type": "TAG_CLOSE",
	"value": "button",
	"pos": 150
}, {
	"type": "EOF"
}];

var res = [{
	"type": "element",
	"tag": "input",
	"attrs": [{
		"type": "if",
		"test": {
			"type": "expression",
			"body": "(!c._sg_('disabled', d, e))",
			"constant": false,
			"setbody": false
		},
		"consequent": [
			[{
				"type": "attribute",
				"name": "r-model",
				"value": "hello"
			}]
		],
		"alternate": [
			[{
				"type": "attribute",
				"name": "disabled"
			}]
		]
	}]
}, {
	"type": "text",
	"text": " "
}, {
	"type": "expression",
	"body": "c._sg_('hello', d, e)",
	"constant": false,
	"setbody": "c._ss_('hello',p_,d, '=', 1)"
}, {
	"type": "text",
	"text": "     "
}, {
	"type": "element",
	"tag": "button",
	"attrs": [{
		"type": "attribute",
		"name": "on-click",
		"value": {
			"type": "expression",
			"body": "c._ss_('disabled',(!c._sg_('disabled', d, e)),d, '=', 1)",
			"constant": false,
			"setbody": "c._ss_('disabled',p_,d, '=', 1)"
		}
	}],
	"children": [{
		"type": "expression",
		"body": "c._sg_('disabled', d, e)?'active':'disable'",
		"constant": false,
		"setbody": false
	}, {
		"type": "text",
		"text": " it"
	}]
}];