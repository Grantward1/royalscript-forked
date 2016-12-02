//tokenizer for Royal Script language
//2016

var stopDict = {
	" ":true,
	"\n":true,
	"\t":true
};

var keepDict = {
	",":true,
	"(":true,
	")":true
};

var Tokenize = function(code){
	var current = "";
	var tokens = [];
	var mode = false
	for (var i = 0; i < code.length; i++) {
		if(mode) {
			if(code[i] in stopDict) {
				mode = false;
				tokens.push(current);
				current = ""
			}
			else if(code[i] in keepDict){
				if (current) tokens.push(current);
				tokens.push(code[i]);
				mode = false;
				current = "";
			}
			else current += code[i];
		}
		else {
			if(!(code[i]in stopDict)) {
				mode = true;
				if (code[i] in keepDict) {tokens.push(code[i])} else{current += code[i];};
			}
		}
	}
	if (current) tokens.push(current);
	return tokens;
};

exports.Tokenize = Tokenize;