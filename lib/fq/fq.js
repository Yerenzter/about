/*
Flanx Quikker JavaScript Library.
v0.0.2

- Flanx Quikker also known as FQJS is a JavaScript library which is the main objective is to write, style and function the webpage using only JavaScript that does not need to use multiple files and languages like fq & fq to achieve a better performance and also it can also integrate with other frameworks like Bootstrap, Tailwind etc.

Created by Yerenzter
*/
// fq BUILT-IN PROPERTY VALUE (IMMUTABLE)
const block = "block";
const borderBox = "border-box";
const center = "center";
const fillX = "100vw";
const fillY = "100vh";
const flex = "flex";
const flexStart = "flex-start";
const grid = "grid";
const inherit = "inherit";
const initial = 0;
const none = "none";
const root = "fq-root";

// FQ UTILITY FUNCT8ONS
let out = (fq, parent) => {
    let body = document.querySelector("body");
    body.style.margin = 0;
    body.style.padding = 0;
    body.style.perspective = "1px";
    body.style.transform = "preserve-3d";

    let fqRoot = document.querySelector("#fq-root");
    fqRoot.style.display = "";
    fqRoot.style.justifyItems = "center";
    fqRoot.style.alignContent = "flex-start";
    fqRoot.style.margin = "0 auto";
    fqRoot.style.padding = 0;
    fqRoot.style.width = "100vw";
    fqRoot.style.height = "100vh";
    fqRoot.style.overflowX = "hidden";
    fqRoot.style.overflowY = "scroll";

    let onHTML = () => {
        let pe = document.querySelector(`#${parent}`);
        let html = {};
        let select = document.querySelector(`#${fq.html.select}`);
        let elem = document.createElement(fq.html.elem);
        elem.textContent = fq.html.text;

        elem.acceptCharset = fq.html.acceptCharset;
        // elem.accessKey = !fq.html.accessKey ? "": fq.html.accessKey;
        elem.action = fq.html.action;
        // elem.align = fq.html.align;
        elem.alt = fq.html.alt;
        elem.async = fq.html.async;
        elem.autoComplete = fq.html.autoComplete;
        elem.autoFocus = fq.html.autoFocus;
        elem.autoPlay = fq.html.autoPlay;
        elem.bgColor = fq.html.bgColor;
        elem.border = fq.html.border;
        elem.charset = fq.html.charset;
        elem.checked = fq.html.checked;
        elem.cite = fq.html.cite;
        elem.className = fq.html.className;
        elem.color = fq.html.color;
        elem.colspan = fq.html.colspan;
        elem.content = fq.html.content;
        elem.contentEditable = !fq.html.contentEditable ? false: fq.html.contentEditable;
        elem.controls = fq.html.controls;
        elem.coords = fq.html.coords;
        elem.data = fq.html.data;
        elem.dateTime = fq.html.dateTime;
        elem.default = fq.html.default;
        elem.defer = fq.html.defer;
        // elem.dir = !fq.html.dir ? "": fq.html.dir;
        // elem.dirName = !fq.html.dirName ? "": fq.html.dirName;
        elem.disabled = fq.html.disabled;
        elem.download = fq.html.download;
        // elem.draggable = !fq.html.draggable ? false: fq.html.draggable;
        elem.enctype = fq.html.enctype;
        elem.for = fq.html.for;
        elem.form = fq.html.form;
        // elem.formAction = !fq.html.formAction ? "": fq.html.formAction;
        elem.headers = fq.html.headers;
        elem.height = fq.html.height;
        elem.hidden = fq.html.hidden;
        elem.high = fq.html.high;
        elem.href = fq.html.href;
        elem.hrefLang = fq.html.hrefLang;
        elem.httpEquiv = fq.html.httpEquiv;
        elem.id = fq.html.id;
        elem.isMap = fq.html.isMap;
        elem.kind = fq.html.kind;
        elem.label = fq.html.label;
        // elem.lang = fq.html.lang;
        elem.list = fq.html.list;
        elem.loop = fq.html.loop;
        elem.low = fq.html.low;
        // elem.max = !fq.html.max ? "": fq.html.max;
        // elem.maxLength = !fq.html.maxLength ? "": fq.html.maxLength;
        elem.media = fq.html.media;
        elem.method = fq.html.method;
        // elem.min = !fq.html.min ? "": fq.html.min;
        elem.multiple = fq.html.multiple;
        elem.muted = fq.html.muted;
        elem.name = fq.html.name;
        elem.noValidate = fq.html.noValidate;
        elem.onabort = fq.html.onabort;
        elem.onafterprint = fq.html.onafterprint;
        elem.onbeforeprint = fq.html.onbeforeprint;
        elem.onbeforeunload = fq.html.onbeforeunload;
        elem.onblur = fq.html.onblur;
        elem.oncanplay = fq.html.oncanplay;
        elem.oncanplaythrough = fq.html.oncanplaythrough;
        elem.onchange = fq.html.onchange;
        elem.onclick = fq.html.onclick;
        elem.oncontextmenu = fq.html.oncontextmenu;
        elem.oncopy = fq.html.oncopy;
        elem.oncuechange = fq.html.oncuechange;
        elem.oncut = fq.html.oncut;
        elem.ondbclick = fq.html.ondbclick;
        elem.ondrag = fq.html.ondrag;
        elem.ondragend = fq.html.ondragend;
        elem.ondragend = fq.html.ondragend;
        elem.ondragleave = fq.html.ondragleave;
        elem.ondragover = fq.html.ondragover;
        elem.ondragstart = fq.html.ondragstart;
        elem.ondurationchange = fq.html.ondurationchange;
        elem.onemptied = fq.html.onemptied;
        elem.onended = fq.html.onended;
        elem.onerror = fq.html.onerror;
        elem.onfocus = fq.html.onfocus;
        elem.onhaschange = fq.html.onhaschange;
        elem.oninput = fq.html.oninput;
        elem.oninvalid = fq.html.oninvalid;
        elem.onkeydown = fq.html.onkeydown;
        elem.onkeypress = fq.html.onkeypress;
        elem.onkeyup = fq.html.onkeyup;
        elem.onload = fq.html.onload;
        elem.onloadeddata = fq.html.onloadeddata;
        elem.onloadedmetadata = fq.html.onloadedmetadata;
        elem.onloadstart = fq.html.onloadstart;
        elem.onmousedown = fq.html.onmousedown;
        elem.onmousemove = fq.html.onmousemove;
        elem.onmouseout = fq.html.onmouseout;
        elem.onmouseover = fq.html.onmouseover;
        elem.onmouseup = fq.html.onmouseup;
        elem.onmousewheel = fq.html.onmousewheel;
        elem.onoffline = fq.html.onoffline;
        elem.ononline = fq.html.ononline;
        elem.onpagehide = fq.html.onpagehide;
        elem.onpageshow = fq.html.onpageshow;
        elem.onpaste = fq.html.onpaste;
        elem.onpause = fq.html.onpause;
        elem.onplay = fq.html.onplay;
        elem.onplaying = fq.html.onplaying;
        elem.onpopstate = fq.html.onpopstate;
        elem.onprogress = fq.html.onprogress;
        elem.onratechange = fq.html.onratechange;
        elem.onreset = fq.html.onreset;
        elem.onresize = fq.html.onresize;
        elem.onscroll = fq.html.onscroll;
        elem.onsearch = fq.html.onsearch;
        elem.onseeked = fq.html.onseeked;
        elem.onseeking = fq.html.onseeking;
        elem.onselect = fq.html.onselect;
        elem.onstalled = fq.html.onstalled;
        elem.onstorage = fq.html.onstorage;
        elem.onsubmit = fq.html.onsubmit;
        elem.onsuspend = fq.html.onsuspend;
        elem.ontimeupdate = fq.html.ontimeupdate;
        elem.ontoggle = fq.html.ontoggle;
        elem.onunload = fq.html.onunload;
        elem.onvolumechange = fq.html.onvolumechange;
        elem.onwaiting = fq.html.onwaiting;
        elem.onwheel = fq.html.onwheel;
        elem.open = fq.html.open;
        elem.optimum = fq.html.optimum;
        // elem.pattern = !fq.html.pattern ? "": fq.html.pattern;
        elem.placeholder = !fq.html.placeholder ? "": fq.html.placeholder;
        elem.poster = fq.html.poster;
        elem.preload = fq.html.preload;
        elem.readOnly = fq.html.readOnly;
        elem.rel = fq.html.rel;
        elem.required = fq.html.required;
        elem.reversed = fq.html.reversed;
        elem.rows = fq.html.rows;
        elem.rowspan = fq.html.rowspan;
        elem.sandbox = fq.html.sandbox;
        elem.scope = fq.html.scope;
        elem.selected = fq.html.selected;
        elem.shape = fq.html.shape;
        // elem.size = fq.html.size;
        elem.sizes = fq.html.sizes;
        elem.span = fq.html.span;
        elem.spellCheck = fq.html.spellCheck;
        elem.src = !fq.html.src ? "": fq.html.src;
        elem.srcDoc = fq.html.srcDoc;
        elem.srcLang = fq.html.srcLang;
        elem.srcSet = fq.html.srcSet;
        elem.start = fq.html.start;
        // elem.step = !fq.html.step ? "": fq.html.step;
        elem.style = fq.html.style;
        // elem.tabIndex = !fq.html.tabIndex ? "": fq.html.tabIndex;
        elem.target = fq.html.target;
        elem.title = fq.html.title;
        // elem.translate = fq.html.translate;
        elem.type = fq.html.type;
        // elem.useMap = !fq.html.useMap ? "": fq.html.useMap;
        elem.value = !fq.html.value ? null: fq.html.value;
        elem.width = fq.html.width;
        elem.wrap = fq.html.wrap;
        !fq.html.select ? false: select.appendChild(elem);
        !parent ? false: pe.appendChild(elem);
    };

    let onCSS = () => {
        let css = {};
        let id = document.querySelector(`#${fq.css.id}`);
        id.style.accentColor = fq.css.accentColor;
        id.style.alignContent = fq.css.alignContent;
        id.style.alignItems = fq.css.alignItems;
        id.style.alignSelf = fq.css.alignSelf;
        id.style.all = fq.css.all;
        id.style.animation = fq.css.animation;
        id.style.animationDelay = fq.css.animationDelay;
        id.style.animationDirection = fq.css.animationDirection;
        id.style.animationDuration = fq.css.animationDuration;
        id.style.animationFillMode = fq.css.animationFillMode;
        id.style.animationIterationCount = fq.css.animationIterationCount;
        id.style.animationName = fq.css.animationName;
        id.style.animationPlayState = fq.css.animationPlayState;
        id.style.animationTimingFunction = fq.css.animationTimingFunction;
        id.style.backdropFilter = fq.css.backdropFilter;
        id.style.backfaceVisibility = fq.css.backfaceVisibility;
        id.style.background = fq.css.background;
        id.style.backgroundAttachment = fq.css.backgroundAttachment;
        id.style.backgroundBlendMode = fq.css.backgroundBlendMode;
        id.style.backgroundClip = fq.css.backgroundClip;
        id.style.backgroundColor = fq.css.backgroundColor;
        id.style.backgroundImage = fq.css.backgroundImage;
        id.style.backgroundOrigin = fq.css.backgroundOrigin;
        id.style.backgroundPosition = fq.css.backgroundPosition;
        id.style.backgroundRepeat = fq.css.backgroundRepeat;
        id.style.backgroundSize = fq.css.backgroundSize;
        id.style.border = fq.css.border;
        id.style.borderBottom = fq.css.borderBottom;
        id.style.borderBottomColor = fq.css.borderBottomColor;
        id.style.borderBottomLeftRadius = fq.css.borderBottomLeftRadius;
        id.style.borderBottomRightRadius = fq.css.borderBottomRightRadius;
        id.style.borderBottomStyle = fq.css.borderBottomStyle;
        id.style.borderBottomWidth = fq.css.borderBottomWidth;
        id.style.borderCollapse = fq.css.borderCollapse;
        id.style.borderColor = fq.css.borderColor;
        id.style.borderImage = fq.css.borderImage;
        id.style.borderImageOutset = fq.css.borderImageOutset;
        id.style.borderImageRepeat = fq.css.borderImageRepeat;
        id.style.borderImageSlice = fq.css.borderImageSlice;
        id.style.borderImageSource = fq.css.borderImageSource;
        id.style.borderImageWidth = fq.css.borderImageWidth;
        id.style.borderLeft = fq.css.borderLeft;
        id.style.borderLeftColor = fq.css.borderLeftColor;
        id.style.borderLeftStyle = fq.css.borderLeftStyle;
        id.style.borderLeftWidth = fq.css.borderLeftWidth;
        id.style.borderRadius = fq.css.borderRadius;
        id.style.borderRight = fq.css.borderRight;
        id.style.borderRightColor = fq.css.borderRightColor;
        id.style.borderRightStyle = fq.css.borderRightStyle;
        id.style.borderRightWidth = fq.css.borderRightWidth;
        id.style.borderSpacing = fq.css.borderSpacing;
        id.style.borderStyle = fq.css.borderStyle;
        id.style.borderTop = fq.css.borderTop;
        id.style.borderTopColor = fq.css.borderTopColor;
        id.style.borderTopLeftRadius = fq.css.borderTopLeftRadius;
        id.style.borderTopRightRadius = fq.css.borderTopRightRadius;
        id.style.borderTopStyle = fq.css.borderTopStyle;
        id.style.borderTopWidth = fq.css.borderTopWidth;
        id.style.borderWidth = fq.css.borderWidth;
        id.style.bottom = fq.css.bottom;
        id.style.boxDecorationBreak = fq.css.boxDecorationBreak;
        id.style.boxShadow = fq.css.boxShadow;
        id.style.boxSizing = fq.css.boxSizing;
        id.style.breakAfter = fq.css.breakAfter;
        id.style.breakBefore = fq.css.breakBefore;
        id.style.breakInside = fq.css.breakInside;
        id.style.captionSide = fq.css.captionSide;
        id.style.caretColor = fq.css.caretColor;
        /* THIS LINE HAS LEAVE BLANK FOR @CHARSET PROPERTY */
        id.style.clear = fq.css.clear;
        id.style.clip = fq.css.clip;
        id.style.color = fq.css.color;
        id.style.columnCount = fq.css.columnCount;
        id.style.columnFill = fq.css.columnFill;
        id.style.columnGap = fq.css.columnGap;
        id.style.columnRule = fq.css.columnRule;
        id.style.columnRuleColor = fq.css.columnRuleColor;
        id.style.columnRuleStyle = fq.css.columnRuleStyle;
        id.style.columnRuleWidth = fq.css.columnRuleWidth;
        id.style.columnSpan = fq.css.columnSpan;
        id.style.columnWidth = fq.css.columnWidth;
        id.style.columns = fq.css.columns;
        id.style.content = fq.css.content;
        id.style.counterIncrement = fq.css.counterIncrement;
        id.style.counterReset = fq.css.counterReset;
        id.style.cursor = fq.css.cursor;
        id.style.direction = fq.css.direction;
        id.style.display = fq.css.display;
        id.style.emptyCells = fq.css.emptyCells;
        id.style.filter = fq.css.filter;
        id.style.flex = fq.css.flex;
        id.style.flexBasis = fq.css.flexBasis;
        id.style.flexDirection = fq.css.flexDirection;
        id.style.flexFlow = fq.css.flexFlow;
        id.style.flexGrow = fq.css.flexGrow;
        id.style.flexShrink = fq.css.flexShrink;
        id.style.flexWrap = fq.css.flexWrap;
        id.style.float = fq.css.float;
        id.style.font = fq.css.font;
        /* THIS LINE LEAVE BLANK FOR @FONTFACE PROPERTY */
        id.style.fontFamily = fq.css.fontFamily;
        id.style.fontFeatureSettings = fq.css.fontFeatureSettings;
        /* THIS LINE LEAVE BLANK FOR @FONTFEATUREVALUES PROPERTY */
        id.style.fontKerning = fq.css.fontKerning;
        id.style.fontLanguageOverride = fq.css.fontLanguageOverride;
        id.style.fontSize = fq.css.fontSize;
        id.style.fontSizeAdjust = fq.css.fontSizeAdjust;
        id.style.fontStretch = fq.css.fontStretch;
        id.style.fontStyle = fq.css.fontStyle;
        id.style.fontSynthesis = fq.css.fontSynthesis;
        id.style.fontVariant = fq.css.fontVariant;
        id.style.fontVariantAlternates = fq.css.fontVariantAlternates;
        id.style.fontVariantCaps = fq.css.fontVariantCaps;
        id.style.fontVariantEastAsian = fq.css.fontVariantEastAsian;
        id.style.fontVariantLigatures = fq.css.fontVariantLigatures;
        id.style.fontVariantNumeric = fq.css.fontVariantNumeric;
        id.style.fontVariantPosition = fq.css.fontVariantPosition;
        id.style.fontWeight = fq.css.fontWeight;
        id.style.gap = fq.css.gap;
        id.style.grid = fq.css.grid;
        id.style.gridArea = fq.css.gridArea;
        id.style.gridAutoColumns = fq.css.gridAutoColumns;
        id.style.gridAutoFlow = fq.css.gridAutoFlow;
        id.style.gridAutoRows = fq.css.gridAutoRows;
        id.style.gridColumn = fq.css.gridColumn;
        id.style.gridColumnEnd = fq.css.gridColumnEnd;
        id.style.gridRowGap = fq.css.gridRowGap;
        id.style.gridRowStart = fq.css.gridRowStart;
        id.style.gridTemplate = fq.css.gridTemplate;
        id.style.gridTemplateAreas = fq.css.gridTemplateAreas;
        id.style.gridTemplateColumns = fq.css.gridTemplateColumns;
        id.style.gridTemplateRows = fq.css.gridTemplateRows;
        id.style.hangingPunctuation = fq.css.hangingPunctuation;
        id.style.height = fq.css.height;
        id.style.hypens = fq.css.hypens;
        id.style.imageRendering = fq.css.imageRendering;
        /* THIS LINE LEAVE BLANK FOR @IMPORT PROPERTY */
        id.style.isolation = fq.css.isolation;
        id.style.justifyContent = fq.css.justifyContent;
        /* THIS LINE LEAVE BLANK FOR @KEYFRAMES PROPERTY */
        id.style.left = fq.css.left;
        id.style.letterSpacing = fq.css.letterSpacing;
        id.style.lineBreak = fq.css.lineBreak;
        id.style.lineHeight = fq.css.lineHeight;
        id.style.listStyle = fq.css.listStyle;
        id.style.listStyleImage = fq.css.listStyleImage;
        id.style.listStylePosition = fq.css.listStylePosition;
        id.style.listStyleType = fq.css.listStyleType;
        id.style.margin = fq.css.margin;
        id.style.marginBottom = fq.css.marginBottom;
        id.style.marginLeft = fq.css.marginLeft;
        id.style.marginRight = fq.css.marginRight;
        id.style.marginTop = fq.css.marginTop;
        id.style.mask = fq.css.mask;
        id.style.maskClip = fq.css.maskClip;
        id.style.maskComposite = fq.css.maskComposite;
        id.style.maskImage = fq.css.maskImage;
        id.style.maskMode = fq.css.maskMode;
        id.style.maskOrigin = fq.css.maskOrigin;
        id.style.maskPosition = fq.css.maskPosition;
        id.style.maskRepeat = fq.css.maskRepeat;
        id.style.maskSize = fq.css.maskSize;
        id.style.maskType = fq.css.maskType;
        id.style.maxHeight = fq.css.maxHeight;
        id.style.maxWidth = fq.css.maxWidth;
        /* THIS LINE LEAVE BLANK FOR @MEDIA PROPERTY */
        id.style.minHeight = fq.css.minHeight;
        id.style.minWidth = fq.css.minWidth;
        id.style.mixBlendMode = fq.css.mixBlendMode;
        id.style.objectFit = fq.css.objectFit;
        id.style.objectPosition = fq.css.objectPosition;
        id.style.opacity = fq.css.opacity;
        id.style.order = fq.css.order;
        id.style.orphans = fq.css.orphans;
        id.style.outline = fq.css.outline;
        id.style.outlineColor = fq.css.outlineColor;
        id.style.outlineOffset = fq.css.outlineOffset;
        id.style.outlineStyle = fq.css.outlineStyle;
        id.style.outlineWidth = fq.css.outlineWidth;
        id.style.overflow = fq.css.overflow;
        id.style.overflowWrap = fq.css.overflowWrap;
        id.style.overflowX = fq.css.overflowX;
        id.style.overflowY = fq.css.overflowY;
        id.style.padding = fq.css.padding;
        id.style.paddingBottom = fq.css.paddingBottom;
        id.style.paddingLeft = fq.css.paddingLeft;
        id.style.paddingRight = fq.css.paddingRight;
        id.style.paddingTop = fq.css.paddingTop;
        id.style.pageBreakAfter = fq.css.pageBreakAfter;
        id.style.pageBreakBefore = fq.css.pageBreakBefore;
        id.style.pageBreakInside = fq.css.pageBreakInside;
        id.style.perspective = fq.css.perspective;
        id.style.perspectiveOrigin = fq.css.perspectiveOrigin;
        id.style.pointerEvents = fq.css.pointerEvents;
        id.style.position = fq.css.position;
        id.style.quotes = fq.css.quotes;
        id.style.resize = fq.css.resize;
        id.style.right = fq.css.right;
        id.style.rowGap = fq.css.rowGap;
        id.style.scrollBehavior = fq.css.scrollBehavior;
        id.style.tabSize = fq.css.tabSize;
        id.style.tableLayout = fq.css.tableLayout;
        id.style.textAlign = fq.css.textAlign;
        id.style.textAlignLast = fq.css.textAlignLast;
        id.style.textCombineUpright = fq.css.textCombineUpright;
        id.style.textDecoration = fq.css.textDecoration;
        id.style.textDecorationColor = fq.css.textDecorationColor;
        id.style.textDecorationLine = fq.css.textDecorationLine;
        id.style.textDecorationStyle = fq.css.textDecorationStyle;
        id.style.textDecorationThickness = fq.css.textDecorationThickness;
        id.style.textEmphasis = fq.css.textEmphasis;
        id.style.textIndent = fq.css.textIndent;
        id.style.textJustify = fq.css.textJustify;
        id.style.textOrientation = fq.css.textOrientation;
        id.style.textoverflow = fq.css.textoverflow;
        id.style.textShadow = fq.css.textShadow;
        id.style.textTransform = fq.css.textTransform;
        id.style.textUnderlinePosition = fq.css.textUnderlinePosition;
        id.style.top = fq.css.top;
        id.style.transform = fq.css.transform;
        id.style.transformOrigin = fq.css.transformOrigin;
        id.style.transformStyle = fq.css.transformStyle;
        id.style.transition = fq.css.transition;
        id.style.transitionDelay = fq.css.transitionDelay;
        id.style.transitionDuration = fq.css.transitionDuration;
        id.style.transitionProperty = fq.css.transitionProperty;
        id.style.transitionTimingFunction = fq.css.transitionTimingFunction;
        id.style.unicodeBidi = fq.css.unicodeBidi;
        id.style.userSelect = fq.css.userSelect;
        id.style.verticalAlign = fq.css.verticalAlign;
        id.style.visibility = fq.css.visibility;
        id.style.whiteSpace = fq.css.whiteSpace;
        id.style.widows = fq.css.widows;
        id.style.width = fq.css.width;
        id.style.wordBreak = fq.css.wordBreak;
        id.style.wordSpacing = fq.css.wordSpacing;
        id.style.wordWrap = fq.css.wordWrap;
        id.style.writingMode = fq.css.writingMode;
        id.style.zIndex = fq.css.zIndex;
    };

    if (!fq.css) {
        onHTML();
    } else if (!fq.html) {
        onCSS();
    } else {
        onHTML(),
        onCSS();
    }
};

let loop = (min, max, run) => {
    for (r = min; r < max; r++) {
        run();
    }
};

let render = (data, root, parent = false) => {
    if (!parent) {
        for (r = 0; r < data.length; r++) {
            out(data[r], root);
        }
    } else {
        for (r = 0; r < data.length; r++) {
            out(data[r], parent);
        }
    }
};

let removeUI = (parent, child) => {
    pe = document.querySelector(`#${parent}`);
    ce = document.querySelector(`#${child}`);
    pe.removeChild(ce);
}

let media = (id, query, run) => {
    let mediaQuery = (x) => {
        let selector = document.querySelector(`#${id}`);

        run(x);
    };

    let queryScreen = window.matchMedia(`(max-width:${query})`);

    mediaQuery(queryScreen);

    queryScreen.addListener(mediaQuery);
};
