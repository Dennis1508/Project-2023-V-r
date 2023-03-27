import Dictionary from "../moduleDemo-main/test/lan/en.json"
import Dictionary from "../moduleDemo-main/test/lan/no.json"

class Dictionary{

    constructor(...languages){
        this.languagefiles = languages;
        this.dictionary = null;
        this.currentLanguage = null;
    }

    setLanguage = async function(lang){
        // Velger språket som skal brukes.

        let languageFile = this.languagefiles.find( file => {
             return file.indexOf(lang) != -1
            });
        
        this.currentLanguage = lang;

        this.dictionary = await import(languageFile, { assert: { type: "json" } });
    }

    get = function(key){
        // Henter riktig verdi basert på key i dictionary.
        console.log(this.dictionary[get]);
        return this.dictionary[key];
    }

    keys = function(){
        // retunerer alle keys i dictionary 
        return Object.keys( this.dictionary);
    }
}

function testLoadingLangaugeResources(){
   const language = ["./lan/no.json", "./lan/en.json"];
   const dictionary = new Dictionary(languages);
    dictionary.setLanguage("no");
    test(JSON.stringify(dictionary.languagefiles) === JSON.stringify(languages), "Testing setting of languages");
}

export default Dictionary;