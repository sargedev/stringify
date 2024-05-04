
namespace stringify {
    function stringify(value: any): string {
        switch(typeof value) {
            case "number": return value.toString();
            case "boolean": return value ? "true" : "false";
            case "object": return stringifyObject(value);
            case "function": return "<method>";
            case "undefined": return "undefined";
            default: return value as string;
        }
    }

    function stringifyObject(value: { [key: string]: any }): string {
        let result = "{";
        let keys = Object.keys(value);
        let key: string;

        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            result += `${key}: ${value[key]}`;
            if (i < keys.length - 1) result += ", ";
        }
        result += "}"
        return result;
    }
}