/**
 * Inbox API
 * Manage work for human moderators by adding, checking out and completing work items. Store User Generated Content to the database.  This will store it twice, once in short-term storage in it's exact form amd again in long term storage in it's redacted and pseudonymized form 
 *
 * OpenAPI spec version: 2.1.1
 * Contact: support@twohat.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * In some cases you will want to call the filter or an AI piece ahead of saving the queue.
 */
export interface Hooks { 
    /**
     * Will look up a user.  Will check for the userId in user.userId then userId if it does not exist.  It will populate the object user
     */
    lookupUser?: boolean;
    /**
     * Will look up a user.  Will check for the userId in reportingUser.userId then userId if it does not exist.  It will populate the object reportingUser.  This is the user who reported another user.
     */
    lookupReportingUser?: boolean;
    /**
     * Will look up the context (ex. server and room OR channel OR postId).  Will check for the context in context.name then context if it does not exist.  It will populate the object context
     */
    lookupContext?: boolean;
    /**
     * How many lines of context should we load from the content logs.  Default is 0 which skips this step.  It will look up the user based on the context.name + the user.userId + timestamp fields + text.text.  If any of those fields is missing it will search without it and use the last x (this number) lines.  It will populate the array context with all the content log results
     */
    lookupContent?: number;
    /**
     * Will look up the language.  Will check for text in text.text and if not present use text.  Will set queueItem.language.language and queueItem.language.detected overriding any current language hard-coded.
     */
    languageId?: boolean;
    /**
     * List all the AI models you want to call here.  You can trump a model with a client specific model by setting queue.param where name == 'thisModelName' so individual clients can override it with custom models trained as a professional service. This is called last after the other fields have been loaded as it will use them to make predictions.  It will set the queueItem.predictions array to the results.  The following formats will be used  - modelName (can this model for all languages)  - modelName_{language} (will replace {language} with the value in queueItem.language.language) 
     */
    queueAI?: Array<string>;
}