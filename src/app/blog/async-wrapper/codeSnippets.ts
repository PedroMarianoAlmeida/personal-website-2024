import { CodeSnipedProps } from "@/Components/CodeSniped";

export const asyncWrapperSniped: CodeSnipedProps = {
  fileName: "asyncWrapper.ts",
  lines: [
    { content: "interface AsyncWrapperError {" },
    { content: "success: false;", indentation: 1 },
    { content: "message: string;", indentation: 1 },
    { content: "}", indentation: 0 },
    { content: "", indentation: 0 },
    { content: "interface AsyncWrapperSuccess<T> {" },
    { content: "result: T;", indentation: 1 },
    { content: "success: true;", indentation: 1 },
    { content: "}", indentation: 0 },
    { content: "", indentation: 0 },
    {
      content:
        "type asyncWrapperResponse<T> = AsyncWrapperSuccess<T> | AsyncWrapperError;",
      indentation: 0,
    },
    { content: "", indentation: 0 },
    { content: "export const asyncWrapper = async <T>(" },
    { content: "callback: () => Promise<T>", indentation: 1 },
    { content: "): Promise<asyncWrapperResponse<T>> => {" },
    { content: "try {", indentation: 1 },
    { content: "const result = await callback();", indentation: 1 },
    { content: "return { success: true, result };", indentation: 1 },
    { content: "} catch (error: any) {" },
    { content: 'let message = "Unknown Error";', indentation: 1 },
    {
      content: "if (error instanceof Error) message = error.message;",
      indentation: 1,
    },
    { content: "return { success: false, message };", indentation: 2 },
    { content: "}", indentation: 1 },
    { content: "};", indentation: 0 },
  ],
};

export const asyncWrapperWithoutTypesSniped: CodeSnipedProps = {
  fileName: "asyncWrapper.ts",
  initialLineNumber: 11,
  lines: [
    {
      content: "// ... Types not important at the moment",
      indentation: 0,
    },
    { content: "", indentation: 0 },
    { content: "export const asyncWrapper = async <T>(" },
    { content: "callback: () => Promise<T>", indentation: 1 },
    { content: "): Promise<asyncWrapperResponse<T>> => {" },
    { content: "try {", indentation: 1 },
    { content: "const result = await callback();", indentation: 1 },
    { content: "return { success: true, result };", indentation: 1 },
    { content: "} catch (error: any) {" },
    { content: 'let message = "Unknown Error";', indentation: 1 },
    {
      content: "if (error instanceof Error) message = error.message;",
      indentation: 1,
    },
    { content: "return { success: false, message };", indentation: 2 },
    { content: "}", indentation: 1 },
    { content: "};", indentation: 0 },
  ],
};

export const serviceSniped: CodeSnipedProps = {
  fileName: "service.ts",
  lines: [
    { content: "export const functionThatHaveTheAsyncLogic = async () => {" },
    { content: "return await asyncWrapper(async () => {", indentation: 1 },
    { content: "const yourAsyncData = await mainFunction()", indentation: 2 },
    { content: "// Any logic that you need to treat", indentation: 2 },
    {
      content: "if(/*any error handling for yourAsyncData*/) {",
      indentation: 2,
    },
    { content: "throw new Error('Your custom error message')", indentation: 3 },
    { content: "}", indentation: 2 },
    {
      content: "const yourDataTreated = 'any another sanitization logic'",
      indentation: 2,
    },
    { content: "return yourDataTreated", indentation: 2 },
    { content: "});", indentation: 1 },
    { content: "};" },
  ],
};

export const consumingSniped: CodeSnipedProps = {
  fileName: "anywhereInYourCode.ts",
  lines: [
    { content: "const myData = await functionThatHaveTheAsyncLogic();" },
    {
      content:
        "if (!myData.success) return 'SOMETHING'; //The return will ensure the right type in bellow lines",
    },
    { content: "const typeSafeReturn = usageCount.result;" },
  ],
};
