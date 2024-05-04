
namespace stringify {
    function stringify(value: any): string {
        switch(typeof value) {
            case "number": return `${value}`;
            case "object": return stringifyObject(value);
            case "function": return "<method>";
            default: return JSON.stringify(value);
        }
    }

    function stringifyObject(value: object): string {
        if (Array.isArray(value)) return stringifyArray(value as any[]);
        return stringifyRealObject(value as {[key: string]: any});
    }

    function stringifyArray(value: any[]): string {
        let result = "[";
        
        for (let i = 0; i < value.length; i++) {
            result += stringify(value[i]);
            if (i < value.length - 1) result += ", ";
        }
        result += "]";
        return result;
    }

    function stringifyRealObject(value: {[key: string]: any}): string {
        let result = "{";
        let keys = Object.keys(value);
        let key: string;

        for (let i = 0; i < keys.length; i++) {
            key = keys[i];
            result += `${key}: ${stringify(value[key])}`;
            if (i < keys.length - 1) result += ", ";
        }
        result += "}"
        return result;
    }
}