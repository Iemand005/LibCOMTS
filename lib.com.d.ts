
/** Windows COM compatibility types */

type HRESULT = number;
type DISPID = number;
type LCID = number;
type MEMBERID = number;
type VARTYPE = number;
type SCODE = number;

type GUID = string;
type CLSID = GUID;
type IID = GUID;
type LIBID = GUID;

type BSTR = string;
type VARIANT_BOOL = boolean;
type OLE_COLOR = number;
type OLE_HANDLE = number;
type LONG = number;
type ULONG = number;
type DWORD = number;
type WORD = number;
type BYTE = number;

type VARIANT = any;
type VARIANTARG = VARIANT;
type SAFEARRAY<T = any> = T[];

interface IUnknown {
    QueryInterface(iid: IID): IUnknown;
    AddRef(): number;
    Release(): number;
}

interface IDispatch extends IUnknown {
    GetTypeInfoCount(): number;
    GetTypeInfo(iTInfo: number, lcid: LCID): any;
    GetIDsOfNames(): any;
    Invoke(): any;
}

interface DISPPARAMS {
    rgvarg: VARIANTARG[];
    rgdispidNamedArgs: DISPID[];
    cArgs: number;
    cNamedArgs: number;
}

interface EXCEPINFO {
    wCode: number;
    wReserved: number;
    bstrSource: BSTR;
    bstrDescription: BSTR;
    bstrHelpFile: BSTR;
    dwHelpContext: DWORD;
    scode: SCODE;
}

interface CY {
    int64: number;
}

interface DECIMAL {
    scale: number;
    sign: number;
    Hi32: number;
    Lo64: number;
}
