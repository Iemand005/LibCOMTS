// Generated COM declarations

declare interface IWebBrowser {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    GoBack(): void;
    GoForward(): void;
    GoHome(): void;
    GoSearch(): void;
    Navigate(URL: string, Flags?: any, TargetFrameName?: any, PostData?: any, Headers?: any): void;
    Refresh(): void;
    Refresh2(Level?: any): void;
    Stop(): void;
    readonly Application: any;
    readonly Parent: any;
    readonly Container: any;
    readonly Document: any;
    readonly TopLevelContainer: boolean;
    readonly Type: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    readonly LocationName: string;
    readonly LocationURL: string;
    readonly Busy: boolean;
    attachEvent<T extends keyof DWebBrowserEventsHandlers>(
        event: T,
        handler: DWebBrowserEventsHandlers[T]
    ): boolean;
    detachEvent<T extends keyof DWebBrowserEventsHandlers>(
        event: T,
        handler: DWebBrowserEventsHandlers[T]
    ): void;
}

declare interface DWebBrowserEvents {
    BeforeNavigate(URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Cancel: boolean): void;
    NavigateComplete(URL: string): void;
    StatusTextChange(Text: string): void;
    ProgressChange(Progress: number, ProgressMax: number): void;
    DownloadComplete(): void;
    CommandStateChange(Command: number, Enable: boolean): void;
    DownloadBegin(): void;
    NewWindow(URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Processed: boolean): void;
    TitleChange(Text: string): void;
    FrameBeforeNavigate(URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Cancel: boolean): void;
    FrameNavigateComplete(URL: string): void;
    FrameNewWindow(URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Processed: boolean): void;
    Quit(Cancel: boolean): void;
    WindowMove(): void;
    WindowResize(): void;
    WindowActivate(): void;
    PropertyChange(Property: string): void;
}

declare interface DWebBrowserEventsHandlers {
    "onbeforenavigate": (URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Cancel: boolean) => void;
    "onnavigatecomplete": (URL: string) => void;
    "onstatustextchange": (Text: string) => void;
    "onprogresschange": (Progress: number, ProgressMax: number) => void;
    "ondownloadcomplete": () => void;
    "oncommandstatechange": (Command: number, Enable: boolean) => void;
    "ondownloadbegin": () => void;
    "onnewwindow": (URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Processed: boolean) => void;
    "ontitlechange": (Text: string) => void;
    "onframebeforenavigate": (URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Cancel: boolean) => void;
    "onframenavigatecomplete": (URL: string) => void;
    "onframenewwindow": (URL: string, Flags: number, TargetFrameName: string, PostData: any, Headers: string, Processed: boolean) => void;
    "onquit": (Cancel: boolean) => void;
    "onwindowmove": () => void;
    "onwindowresize": () => void;
    "onwindowactivate": () => void;
    "onpropertychange": (Property: string) => void;
}

declare enum CommandStateChangeConstants {
    CSC_UPDATECOMMANDS = -1,
    CSC_NAVIGATEFORWARD = 1,
    CSC_NAVIGATEBACK = 2,
}

declare interface IWebBrowserApp {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    GoBack(): void;
    GoForward(): void;
    GoHome(): void;
    GoSearch(): void;
    Navigate(URL: string, Flags?: any, TargetFrameName?: any, PostData?: any, Headers?: any): void;
    Refresh(): void;
    Refresh2(Level?: any): void;
    Stop(): void;
    Quit(): void;
    ClientToWindow(pcx: number, pcy: number): void;
    PutProperty(Property: string, vtValue: any): void;
    GetProperty(Property: string): any;
    readonly Application: any;
    readonly Parent: any;
    readonly Container: any;
    readonly Document: any;
    readonly TopLevelContainer: boolean;
    readonly Type: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    readonly LocationName: string;
    readonly LocationURL: string;
    readonly Busy: boolean;
    readonly Name: string;
    readonly HWND: number;
    readonly FullName: string;
    readonly Path: string;
    Visible: boolean;
    StatusBar: boolean;
    StatusText: string;
    ToolBar: number;
    MenuBar: boolean;
    FullScreen: boolean;
    attachEvent<T extends keyof DWebBrowserEvents2Handlers>(
        event: T,
        handler: DWebBrowserEvents2Handlers[T]
    ): boolean;
    detachEvent<T extends keyof DWebBrowserEvents2Handlers>(
        event: T,
        handler: DWebBrowserEvents2Handlers[T]
    ): void;
}

declare interface IWebBrowser2 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    GoBack(): void;
    GoForward(): void;
    GoHome(): void;
    GoSearch(): void;
    Navigate(URL: string, Flags?: any, TargetFrameName?: any, PostData?: any, Headers?: any): void;
    Refresh(): void;
    Refresh2(Level?: any): void;
    Stop(): void;
    Quit(): void;
    ClientToWindow(pcx: number, pcy: number): void;
    PutProperty(Property: string, vtValue: any): void;
    GetProperty(Property: string): any;
    Navigate2(URL: any, Flags?: any, TargetFrameName?: any, PostData?: any, Headers?: any): void;
    QueryStatusWB(cmdID: OLECMDID): OLECMDF;
    ExecWB(cmdID: OLECMDID, cmdexecopt: OLECMDEXECOPT, pvaIn?: any, pvaOut?: any): void;
    ShowBrowserBar(pvaClsid: any, pvarShow?: any, pvarSize?: any): void;
    readonly Application: any;
    readonly Parent: any;
    readonly Container: any;
    readonly Document: any;
    readonly TopLevelContainer: boolean;
    readonly Type: string;
    Left: number;
    Top: number;
    Width: number;
    Height: number;
    readonly LocationName: string;
    readonly LocationURL: string;
    readonly Busy: boolean;
    readonly Name: string;
    readonly HWND: number;
    readonly FullName: string;
    readonly Path: string;
    Visible: boolean;
    StatusBar: boolean;
    StatusText: string;
    ToolBar: number;
    MenuBar: boolean;
    FullScreen: boolean;
    readonly ReadyState: tagREADYSTATE;
    Offline: boolean;
    Silent: boolean;
    RegisterAsBrowser: boolean;
    RegisterAsDropTarget: boolean;
    TheaterMode: boolean;
    AddressBar: boolean;
    Resizable: boolean;
    attachEvent<T extends keyof DWebBrowserEvents2Handlers>(
        event: T,
        handler: DWebBrowserEvents2Handlers[T]
    ): boolean;
    detachEvent<T extends keyof DWebBrowserEvents2Handlers>(
        event: T,
        handler: DWebBrowserEvents2Handlers[T]
    ): void;
}

declare enum OLECMDID {
    OLECMDID_OPEN = 1,
    OLECMDID_NEW = 2,
    OLECMDID_SAVE = 3,
    OLECMDID_SAVEAS = 4,
    OLECMDID_SAVECOPYAS = 5,
    OLECMDID_PRINT = 6,
    OLECMDID_PRINTPREVIEW = 7,
    OLECMDID_PAGESETUP = 8,
    OLECMDID_SPELL = 9,
    OLECMDID_PROPERTIES = 10,
    OLECMDID_CUT = 11,
    OLECMDID_COPY = 12,
    OLECMDID_PASTE = 13,
    OLECMDID_PASTESPECIAL = 14,
    OLECMDID_UNDO = 15,
    OLECMDID_REDO = 16,
    OLECMDID_SELECTALL = 17,
    OLECMDID_CLEARSELECTION = 18,
    OLECMDID_ZOOM = 19,
    OLECMDID_GETZOOMRANGE = 20,
    OLECMDID_UPDATECOMMANDS = 21,
    OLECMDID_REFRESH = 22,
    OLECMDID_STOP = 23,
    OLECMDID_HIDETOOLBARS = 24,
    OLECMDID_SETPROGRESSMAX = 25,
    OLECMDID_SETPROGRESSPOS = 26,
    OLECMDID_SETPROGRESSTEXT = 27,
    OLECMDID_SETTITLE = 28,
    OLECMDID_SETDOWNLOADSTATE = 29,
    OLECMDID_STOPDOWNLOAD = 30,
    OLECMDID_ONTOOLBARACTIVATED = 31,
    OLECMDID_FIND = 32,
    OLECMDID_DELETE = 33,
    OLECMDID_HTTPEQUIV = 34,
    OLECMDID_HTTPEQUIV_DONE = 35,
    OLECMDID_ENABLE_INTERACTION = 36,
    OLECMDID_ONUNLOAD = 37,
    OLECMDID_PROPERTYBAG2 = 38,
    OLECMDID_PREREFRESH = 39,
    OLECMDID_SHOWSCRIPTERROR = 40,
    OLECMDID_SHOWMESSAGE = 41,
    OLECMDID_SHOWFIND = 42,
    OLECMDID_SHOWPAGESETUP = 43,
    OLECMDID_SHOWPRINT = 44,
    OLECMDID_CLOSE = 45,
    OLECMDID_ALLOWUILESSSAVEAS = 46,
    OLECMDID_DONTDOWNLOADCSS = 47,
    OLECMDID_UPDATEPAGESTATUS = 48,
    OLECMDID_PRINT2 = 49,
    OLECMDID_PRINTPREVIEW2 = 50,
    OLECMDID_SETPRINTTEMPLATE = 51,
    OLECMDID_GETPRINTTEMPLATE = 52,
    OLECMDID_PAGEACTIONBLOCKED = 55,
    OLECMDID_PAGEACTIONUIQUERY = 56,
    OLECMDID_FOCUSVIEWCONTROLS = 57,
    OLECMDID_FOCUSVIEWCONTROLSQUERY = 58,
    OLECMDID_SHOWPAGEACTIONMENU = 59,
    OLECMDID_ADDTRAVELENTRY = 60,
    OLECMDID_UPDATETRAVELENTRY = 61,
    OLECMDID_UPDATEBACKFORWARDSTATE = 62,
    OLECMDID_OPTICAL_ZOOM = 63,
    OLECMDID_OPTICAL_GETZOOMRANGE = 64,
    OLECMDID_WINDOWSTATECHANGED = 65,
    OLECMDID_ACTIVEXINSTALLSCOPE = 66,
    OLECMDID_UPDATETRAVELENTRY_DATARECOVERY = 67,
    OLECMDID_SHOWTASKDLG = 68,
    OLECMDID_POPSTATEEVENT = 69,
    OLECMDID_VIEWPORT_MODE = 70,
    OLECMDID_LAYOUT_VIEWPORT_WIDTH = 71,
    OLECMDID_VISUAL_VIEWPORT_EXCLUDE_BOTTOM = 72,
    OLECMDID_USER_OPTICAL_ZOOM = 73,
    OLECMDID_PAGEAVAILABLE = 74,
    OLECMDID_GETUSERSCALABLE = 75,
    OLECMDID_UPDATE_CARET = 76,
    OLECMDID_ENABLE_VISIBILITY = 77,
    OLECMDID_MEDIA_PLAYBACK = 78,
    OLECMDID_SETFAVICON = 79,
    OLECMDID_SET_HOST_FULLSCREENMODE = 80,
    OLECMDID_EXITFULLSCREEN = 81,
    OLECMDID_SCROLLCOMPLETE = 82,
    OLECMDID_ONBEFOREUNLOAD = 83,
    OLECMDID_SHOWMESSAGE_BLOCKABLE = 84,
    OLECMDID_SHOWTASKDLG_BLOCKABLE = 85,
}

declare enum OLECMDF {
    OLECMDF_SUPPORTED = 1,
    OLECMDF_ENABLED = 2,
    OLECMDF_LATCHED = 4,
    OLECMDF_NINCHED = 8,
    OLECMDF_INVISIBLE = 16,
    OLECMDF_DEFHIDEONCTXTMENU = 32,
}

declare enum OLECMDEXECOPT {
    OLECMDEXECOPT_DODEFAULT = 0,
    OLECMDEXECOPT_PROMPTUSER = 1,
    OLECMDEXECOPT_DONTPROMPTUSER = 2,
    OLECMDEXECOPT_SHOWHELP = 3,
}

declare enum tagREADYSTATE {
    READYSTATE_UNINITIALIZED = 0,
    READYSTATE_LOADING = 1,
    READYSTATE_LOADED = 2,
    READYSTATE_INTERACTIVE = 3,
    READYSTATE_COMPLETE = 4,
}

declare enum SecureLockIconConstants {
    secureLockIconUnsecure = 0,
    secureLockIconMixed = 1,
    secureLockIconSecureUnknownBits = 2,
    secureLockIconSecure40Bit = 3,
    secureLockIconSecure56Bit = 4,
    secureLockIconSecureFortezza = 5,
    secureLockIconSecure128Bit = 6,
}

declare enum NewProcessCauseConstants {
    ProtectedModeRedirect = 1,
}

declare interface DWebBrowserEvents2 {
    StatusTextChange(Text: string): void;
    ProgressChange(Progress: number, ProgressMax: number): void;
    CommandStateChange(Command: number, Enable: boolean): void;
    DownloadBegin(): void;
    DownloadComplete(): void;
    TitleChange(Text: string): void;
    PropertyChange(szProperty: string): void;
    BeforeNavigate2(pDisp: any, URL: any, Flags: any, TargetFrameName: any, PostData: any, Headers: any, Cancel: boolean): void;
    NewWindow2(ppDisp: any, Cancel: boolean): void;
    NavigateComplete2(pDisp: any, URL: any): void;
    DocumentComplete(pDisp: any, URL: any): void;
    OnQuit(): void;
    OnVisible(Visible: boolean): void;
    OnToolBar(ToolBar: boolean): void;
    OnMenuBar(MenuBar: boolean): void;
    OnStatusBar(StatusBar: boolean): void;
    OnFullScreen(FullScreen: boolean): void;
    OnTheaterMode(TheaterMode: boolean): void;
    WindowSetResizable(Resizable: boolean): void;
    WindowSetLeft(Left: number): void;
    WindowSetTop(Top: number): void;
    WindowSetWidth(Width: number): void;
    WindowSetHeight(Height: number): void;
    WindowClosing(IsChildWindow: boolean, Cancel: boolean): void;
    ClientToHostWindow(CX: number, CY: number): void;
    SetSecureLockIcon(SecureLockIcon: number): void;
    FileDownload(ActiveDocument: boolean, Cancel: boolean): void;
    NavigateError(pDisp: any, URL: any, Frame: any, StatusCode: any, Cancel: boolean): void;
    PrintTemplateInstantiation(pDisp: any): void;
    PrintTemplateTeardown(pDisp: any): void;
    UpdatePageStatus(pDisp: any, nPage: any, fDone: any): void;
    PrivacyImpactedStateChange(bImpacted: boolean): void;
    NewWindow3(ppDisp: any, Cancel: boolean, dwFlags: number, bstrUrlContext: string, bstrUrl: string): void;
    SetPhishingFilterStatus(PhishingFilterStatus: number): void;
    WindowStateChanged(dwWindowStateFlags: number, dwValidFlagsMask: number): void;
    NewProcess(lCauseFlag: number, pWB2: any, Cancel: boolean): void;
    ThirdPartyUrlBlocked(URL: any, dwCount: number): void;
    RedirectXDomainBlocked(pDisp: any, StartURL: any, RedirectURL: any, Frame: any, StatusCode: any): void;
    BeforeScriptExecute(pDispWindow: any): void;
    WebWorkerStarted(dwUniqueID: number, bstrWorkerLabel: string): void;
    WebWorkerFinsihed(dwUniqueID: number): void;
}

declare interface DWebBrowserEvents2Handlers {
    "onstatustextchange": (Text: string) => void;
    "onprogresschange": (Progress: number, ProgressMax: number) => void;
    "oncommandstatechange": (Command: number, Enable: boolean) => void;
    "ondownloadbegin": () => void;
    "ondownloadcomplete": () => void;
    "ontitlechange": (Text: string) => void;
    "onpropertychange": (szProperty: string) => void;
    "onbeforenavigate2": (pDisp: any, URL: any, Flags: any, TargetFrameName: any, PostData: any, Headers: any, Cancel: boolean) => void;
    "onnewwindow2": (ppDisp: any, Cancel: boolean) => void;
    "onnavigatecomplete2": (pDisp: any, URL: any) => void;
    "ondocumentcomplete": (pDisp: any, URL: any) => void;
    "onquit": () => void;
    "onvisible": (Visible: boolean) => void;
    "ontoolbar": (ToolBar: boolean) => void;
    "onmenubar": (MenuBar: boolean) => void;
    "onstatusbar": (StatusBar: boolean) => void;
    "onfullscreen": (FullScreen: boolean) => void;
    "ontheatermode": (TheaterMode: boolean) => void;
    "onwindowsetresizable": (Resizable: boolean) => void;
    "onwindowsetleft": (Left: number) => void;
    "onwindowsettop": (Top: number) => void;
    "onwindowsetwidth": (Width: number) => void;
    "onwindowsetheight": (Height: number) => void;
    "onwindowclosing": (IsChildWindow: boolean, Cancel: boolean) => void;
    "onclienttohostwindow": (CX: number, CY: number) => void;
    "onsetsecurelockicon": (SecureLockIcon: number) => void;
    "onfiledownload": (ActiveDocument: boolean, Cancel: boolean) => void;
    "onnavigateerror": (pDisp: any, URL: any, Frame: any, StatusCode: any, Cancel: boolean) => void;
    "onprinttemplateinstantiation": (pDisp: any) => void;
    "onprinttemplateteardown": (pDisp: any) => void;
    "onupdatepagestatus": (pDisp: any, nPage: any, fDone: any) => void;
    "onprivacyimpactedstatechange": (bImpacted: boolean) => void;
    "onnewwindow3": (ppDisp: any, Cancel: boolean, dwFlags: number, bstrUrlContext: string, bstrUrl: string) => void;
    "onsetphishingfilterstatus": (PhishingFilterStatus: number) => void;
    "onwindowstatechanged": (dwWindowStateFlags: number, dwValidFlagsMask: number) => void;
    "onnewprocess": (lCauseFlag: number, pWB2: any, Cancel: boolean) => void;
    "onthirdpartyurlblocked": (URL: any, dwCount: number) => void;
    "onredirectxdomainblocked": (pDisp: any, StartURL: any, RedirectURL: any, Frame: any, StatusCode: any) => void;
    "onbeforescriptexecute": (pDispWindow: any) => void;
    "onwebworkerstarted": (dwUniqueID: number, bstrWorkerLabel: string) => void;
    "onwebworkerfinsihed": (dwUniqueID: number) => void;
}

declare enum ShellWindowTypeConstants {
    SWC_EXPLORER = 0,
    SWC_BROWSER = 1,
    SWC_3RDPARTY = 2,
    SWC_CALLBACK = 4,
    SWC_DESKTOP = 8,
}

declare enum ShellWindowFindWindowOptions {
    SWFO_NEEDDISPATCH = 1,
    SWFO_INCLUDEPENDING = 2,
    SWFO_COOKIEPASSED = 4,
}

declare interface DShellWindowsEvents {
    WindowRegistered(lCookie: number): void;
    WindowRevoked(lCookie: number): void;
}

declare interface DShellWindowsEventsHandlers {
    "onwindowregistered": (lCookie: number) => void;
    "onwindowrevoked": (lCookie: number) => void;
}

declare interface IShellWindows {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    Item(index?: any): any;
    _NewEnum(): any;
    Register(pid: any, HWND: number, swClass: number, plCookie: number): void;
    RegisterPending(lThreadId: number, pvarloc: any, pvarlocRoot: any, swClass: number, plCookie: number): void;
    Revoke(lCookie: number): void;
    OnNavigate(lCookie: number, pvarloc: any): void;
    OnActivated(lCookie: number, fActive: boolean): void;
    FindWindowSW(pvarloc: any, pvarlocRoot: any, swClass: number, pHWND: number, swfwOptions: number): any;
    OnCreated(lCookie: number, punk: any): void;
    ProcessAttachDetach(fAttach: boolean): void;
    readonly Count: number;
    attachEvent<T extends keyof DShellWindowsEventsHandlers>(
        event: T,
        handler: DShellWindowsEventsHandlers[T]
    ): boolean;
    detachEvent<T extends keyof DShellWindowsEventsHandlers>(
        event: T,
        handler: DShellWindowsEventsHandlers[T]
    ): void;
}

declare interface IShellUIHelper {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
}

declare interface IShellUIHelper2 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
}

declare interface IShellUIHelper3 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
}

declare interface IShellUIHelper4 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
}

declare interface IShellUIHelper5 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msReportSafeUrl(): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeClearBadge(): void;
    msDiagnoseConnectionUILess(): void;
    msLaunchNetworkClientHelp(): void;
    msChangeDefaultBrowser(fChange: boolean): void;
}

declare interface IShellUIHelper6 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msReportSafeUrl(): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeClearBadge(): void;
    msDiagnoseConnectionUILess(): void;
    msLaunchNetworkClientHelp(): void;
    msChangeDefaultBrowser(fChange: boolean): void;
    msStopPeriodicTileUpdate(): void;
    msStartPeriodicTileUpdate(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msStartPeriodicTileUpdateBatch(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msClearTile(): void;
    msEnableTileNotificationQueue(fChange: boolean): void;
    msPinnedSiteState(): any;
    msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
    msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
    msScheduledTileNotification(bstrNotificationXml: string, bstrNotificationId: string, bstrNotificationTag: string, startTime?: any, expirationTime?: any): void;
    msRemoveScheduledTileNotification(bstrNotificationId: string): void;
    msStartPeriodicBadgeUpdate(pollingUri: string, startTime?: any, uiUpdateRecurrence?: any): void;
    msStopPeriodicBadgeUpdate(): void;
    msLaunchInternetOptions(): void;
}

declare interface IShellUIHelper7 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msReportSafeUrl(): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeClearBadge(): void;
    msDiagnoseConnectionUILess(): void;
    msLaunchNetworkClientHelp(): void;
    msChangeDefaultBrowser(fChange: boolean): void;
    msStopPeriodicTileUpdate(): void;
    msStartPeriodicTileUpdate(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msStartPeriodicTileUpdateBatch(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msClearTile(): void;
    msEnableTileNotificationQueue(fChange: boolean): void;
    msPinnedSiteState(): any;
    msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
    msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
    msScheduledTileNotification(bstrNotificationXml: string, bstrNotificationId: string, bstrNotificationTag: string, startTime?: any, expirationTime?: any): void;
    msRemoveScheduledTileNotification(bstrNotificationId: string): void;
    msStartPeriodicBadgeUpdate(pollingUri: string, startTime?: any, uiUpdateRecurrence?: any): void;
    msStopPeriodicBadgeUpdate(): void;
    msLaunchInternetOptions(): void;
    SetExperimentalFlag(bstrFlagString: string, vfFlag: boolean): void;
    GetExperimentalFlag(bstrFlagString: string): boolean;
    SetExperimentalValue(bstrValueString: string, dwValue: number): void;
    GetExperimentalValue(bstrValueString: string): number;
    ResetAllExperimentalFlagsAndValues(): void;
    GetNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    SetNeedIEAutoLaunchFlag(bstrUrl: string, flag: boolean): void;
    HasNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    LaunchIE(bstrUrl: string, automated: boolean): void;
}

declare interface IShellUIHelper8 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msReportSafeUrl(): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeClearBadge(): void;
    msDiagnoseConnectionUILess(): void;
    msLaunchNetworkClientHelp(): void;
    msChangeDefaultBrowser(fChange: boolean): void;
    msStopPeriodicTileUpdate(): void;
    msStartPeriodicTileUpdate(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msStartPeriodicTileUpdateBatch(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msClearTile(): void;
    msEnableTileNotificationQueue(fChange: boolean): void;
    msPinnedSiteState(): any;
    msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
    msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
    msScheduledTileNotification(bstrNotificationXml: string, bstrNotificationId: string, bstrNotificationTag: string, startTime?: any, expirationTime?: any): void;
    msRemoveScheduledTileNotification(bstrNotificationId: string): void;
    msStartPeriodicBadgeUpdate(pollingUri: string, startTime?: any, uiUpdateRecurrence?: any): void;
    msStopPeriodicBadgeUpdate(): void;
    msLaunchInternetOptions(): void;
    SetExperimentalFlag(bstrFlagString: string, vfFlag: boolean): void;
    GetExperimentalFlag(bstrFlagString: string): boolean;
    SetExperimentalValue(bstrValueString: string, dwValue: number): void;
    GetExperimentalValue(bstrValueString: string): number;
    ResetAllExperimentalFlagsAndValues(): void;
    GetNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    SetNeedIEAutoLaunchFlag(bstrUrl: string, flag: boolean): void;
    HasNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    LaunchIE(bstrUrl: string, automated: boolean): void;
    GetCVListData(): string;
    GetCVListLocalData(): string;
    GetEMIEListData(): string;
    GetEMIEListLocalData(): string;
    OpenFavoritesPane(): void;
    OpenFavoritesSettings(): void;
    LaunchInHVSI(bstrUrl: string): void;
}

declare interface IShellUIHelper9 {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    ResetFirstBootMode(): void;
    ResetSafeMode(): void;
    RefreshOfflineDesktop(): void;
    AddFavorite(URL: string, Title?: any): void;
    AddChannel(URL: string): void;
    AddDesktopComponent(URL: string, Type: string, Left?: any, Top?: any, Width?: any, Height?: any): void;
    IsSubscribed(URL: string): boolean;
    NavigateAndFind(URL: string, strQuery: string, varTargetFrame: any): void;
    ImportExportFavorites(fImport: boolean, strImpExpPath: string): void;
    AutoCompleteSaveForm(Form?: any): void;
    AutoScan(strSearch: string, strFailureUrl: string, pvarTargetFrame?: any): void;
    AutoCompleteAttach(Reserved?: any): void;
    ShowBrowserUI(bstrName: string, pvarIn: any): any;
    AddSearchProvider(URL: string): void;
    RunOnceShown(): void;
    SkipRunOnce(): void;
    CustomizeSettings(fSQM: boolean, fPhishing: boolean, bstrLocale: string): void;
    SqmEnabled(): boolean;
    PhishingEnabled(): boolean;
    BrandImageUri(): string;
    SkipTabsWelcome(): void;
    DiagnoseConnection(): void;
    CustomizeClearType(fSet: boolean): void;
    IsSearchProviderInstalled(URL: string): number;
    IsSearchMigrated(): boolean;
    DefaultSearchProvider(): string;
    RunOnceRequiredSettingsComplete(fComplete: boolean): void;
    RunOnceHasShown(): boolean;
    SearchGuideUrl(): string;
    AddService(URL: string): void;
    IsServiceInstalled(URL: string, Verb: string): number;
    InPrivateFilteringEnabled(): boolean;
    AddToFavoritesBar(URL: string, Title: string, Type?: any): void;
    BuildNewTabPage(): void;
    SetRecentlyClosedVisible(fVisible: boolean): void;
    SetActivitiesVisible(fVisible: boolean): void;
    ContentDiscoveryReset(): void;
    IsSuggestedSitesEnabled(): boolean;
    EnableSuggestedSites(fEnable: boolean): void;
    NavigateToSuggestedSites(bstrRelativeUrl: string): void;
    ShowTabsHelp(): void;
    ShowInPrivateHelp(): void;
    msIsSiteMode(): boolean;
    msSiteModeShowThumbBar(): void;
    msSiteModeAddThumbBarButton(bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeUpdateThumbBarButton(ButtonID: any, fEnabled: boolean, fVisible: boolean): void;
    msSiteModeSetIconOverlay(IconUrl: string, pvarDescription?: any): void;
    msSiteModeClearIconOverlay(): void;
    msAddSiteMode(): void;
    msSiteModeCreateJumpList(bstrHeader: string): void;
    msSiteModeAddJumpListItem(bstrName: string, bstrActionUri: string, bstrIconUri: string, pvarWindowType?: any): void;
    msSiteModeClearJumpList(): void;
    msSiteModeShowJumpList(): void;
    msSiteModeAddButtonStyle(uiButtonID: any, bstrIconURL: string, bstrTooltip: string): any;
    msSiteModeShowButtonStyle(uiButtonID: any, uiStyleID: any): void;
    msSiteModeActivate(): void;
    msIsSiteModeFirstRun(fPreserveState: boolean): any;
    msAddTrackingProtectionList(URL: string, bstrFilterName: string): void;
    msTrackingProtectionEnabled(): boolean;
    msActiveXFilteringEnabled(): boolean;
    msProvisionNetworks(bstrProvisioningXml: string): any;
    msReportSafeUrl(): void;
    msSiteModeRefreshBadge(): void;
    msSiteModeClearBadge(): void;
    msDiagnoseConnectionUILess(): void;
    msLaunchNetworkClientHelp(): void;
    msChangeDefaultBrowser(fChange: boolean): void;
    msStopPeriodicTileUpdate(): void;
    msStartPeriodicTileUpdate(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msStartPeriodicTileUpdateBatch(pollingUris: any, startTime?: any, uiUpdateRecurrence?: any): void;
    msClearTile(): void;
    msEnableTileNotificationQueue(fChange: boolean): void;
    msPinnedSiteState(): any;
    msEnableTileNotificationQueueForSquare150x150(fChange: boolean): void;
    msEnableTileNotificationQueueForWide310x150(fChange: boolean): void;
    msEnableTileNotificationQueueForSquare310x310(fChange: boolean): void;
    msScheduledTileNotification(bstrNotificationXml: string, bstrNotificationId: string, bstrNotificationTag: string, startTime?: any, expirationTime?: any): void;
    msRemoveScheduledTileNotification(bstrNotificationId: string): void;
    msStartPeriodicBadgeUpdate(pollingUri: string, startTime?: any, uiUpdateRecurrence?: any): void;
    msStopPeriodicBadgeUpdate(): void;
    msLaunchInternetOptions(): void;
    SetExperimentalFlag(bstrFlagString: string, vfFlag: boolean): void;
    GetExperimentalFlag(bstrFlagString: string): boolean;
    SetExperimentalValue(bstrValueString: string, dwValue: number): void;
    GetExperimentalValue(bstrValueString: string): number;
    ResetAllExperimentalFlagsAndValues(): void;
    GetNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    SetNeedIEAutoLaunchFlag(bstrUrl: string, flag: boolean): void;
    HasNeedIEAutoLaunchFlag(bstrUrl: string): boolean;
    LaunchIE(bstrUrl: string, automated: boolean): void;
    GetCVListData(): string;
    GetCVListLocalData(): string;
    GetEMIEListData(): string;
    GetEMIEListLocalData(): string;
    OpenFavoritesPane(): void;
    OpenFavoritesSettings(): void;
    LaunchInHVSI(bstrUrl: string): void;
    GetOSSku(): number;
}

declare interface DShellNameSpaceEvents {
    FavoritesSelectionChange(cItems: number, hItem: number, strName: string, strUrl: string, cVisits: number, strDate: string, fAvailableOffline: number): void;
    SelectionChange(): void;
    DoubleClick(): void;
    Initialized(): void;
}

declare interface DShellNameSpaceEventsHandlers {
    "onfavoritesselectionchange": (cItems: number, hItem: number, strName: string, strUrl: string, cVisits: number, strDate: string, fAvailableOffline: number) => void;
    "onselectionchange": () => void;
    "ondoubleclick": () => void;
    "oninitialized": () => void;
}

declare interface IShellFavoritesNameSpace {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    MoveSelectionUp(): void;
    MoveSelectionDown(): void;
    ResetSort(): void;
    NewFolder(): void;
    Synchronize(): void;
    Import(): void;
    Export(): void;
    InvokeContextMenuCommand(strCommand: string): void;
    MoveSelectionTo(): void;
    CreateSubscriptionForSelection(): boolean;
    DeleteSubscriptionForSelection(): boolean;
    SetRoot(bstrFullPath: string): void;
    readonly SubscriptionsEnabled: boolean;
}

declare interface IShellNameSpace {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    MoveSelectionUp(): void;
    MoveSelectionDown(): void;
    ResetSort(): void;
    NewFolder(): void;
    Synchronize(): void;
    Import(): void;
    Export(): void;
    InvokeContextMenuCommand(strCommand: string): void;
    MoveSelectionTo(): void;
    CreateSubscriptionForSelection(): boolean;
    DeleteSubscriptionForSelection(): boolean;
    SetRoot(bstrFullPath: string): void;
    SetViewType(iType: number): void;
    SelectedItems(): any;
    Expand(var: any, iDepth: number): void;
    UnselectAll(): void;
    readonly SubscriptionsEnabled: boolean;
    EnumOptions: number;
    SelectedItem: any;
    Root: any;
    Depth: number;
    Mode: number;
    Flags: number;
    TVFlags: number;
    Columns: string;
    readonly CountViewTypes: number;
    attachEvent<T extends keyof DShellNameSpaceEventsHandlers>(
        event: T,
        handler: DShellNameSpaceEventsHandlers[T]
    ): boolean;
    detachEvent<T extends keyof DShellNameSpaceEventsHandlers>(
        event: T,
        handler: DShellNameSpaceEventsHandlers[T]
    ): void;
}

declare interface IScriptErrorList {
    QueryInterface(riid: GUID, ppvObj: void): void;
    AddRef(): number;
    Release(): number;
    GetTypeInfoCount(pctinfo: number): void;
    GetTypeInfo(itinfo: number, lcid: number, pptinfo: void): void;
    GetIDsOfNames(riid: GUID, rgszNames: number, cNames: number, lcid: number, rgdispid: number): void;
    Invoke(dispidMember: number, riid: GUID, lcid: number, wFlags: number, pdispparams: DISPPARAMS, pvarResult: any, pexcepinfo: EXCEPINFO, puArgErr: number): void;
    advanceError(): void;
    retreatError(): void;
    canAdvanceError(): number;
    canRetreatError(): number;
    getErrorLine(): number;
    getErrorChar(): number;
    getErrorCode(): number;
    getErrorMsg(): string;
    getErrorUrl(): string;
    getAlwaysShowLockState(): number;
    getDetailsPaneOpen(): number;
    setDetailsPaneOpen(fDetailsPaneOpen: number): void;
    getPerErrorDisplay(): number;
    setPerErrorDisplay(fPerErrorDisplay: number): void;
}

