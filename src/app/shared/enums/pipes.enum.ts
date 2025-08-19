export enum EBuildPipe {
    Async = 'async',
    Currency = 'currency',
    Date = 'date',
    Decimal = 'number',         // el pipe decimal en plantillas se llama 'number'
    I18nPlural = 'i18nPlural',
    I18nSelect = 'i18nSelect',
    Json = 'json',
    KeyValue = 'keyvalue',
    LowerCase = 'lowercase',
    Percent = 'percent',
    Slice = 'slice',
    TitleCase = 'titlecase',
    UpperCase = 'uppercase',
}


export enum EDatePipeFormat {
    Short = 'short',
    Medium = 'medium',
    Long = 'long',
    Full = 'full',
    ShortDate = 'shortDate',
    MediumDate = 'mediumDate',
    LongDate = 'longDate',
    FullDate = 'fullDate',
    ShortTime = 'shortTime',
    MediumTime = 'mediumTime',
    LongTime = 'longTime',
    FullTime = 'fullTime'
}

export enum ECurrencyCode {
    USD = 'USD',
    EUR = 'EUR',
    COP = 'COP',
    MXN = 'MXN',
}

export enum ECurrencyDisplay {
    Symbol = 'symbol',
    Code = 'code',
    SymbolNarrow = 'symbol-narrow',
    Name = 'name'
}
