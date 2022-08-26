export interface IValidationError {
    detail: Array<{
        loc: Array<string>,
        msg: string,
        type: string
    }> | string
}
