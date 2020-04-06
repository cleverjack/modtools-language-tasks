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
import { ExampleOutputItems } from './exampleOutputItems';

/**
 * Results from a get queue item request.
 */
export interface ExampleOutput { 
    /**
     * Total number of items that match the search.  You can use this to show how many items remain.  So you may have only requested 10 items but a 1000 are still available.
     */
    total?: number;
    items?: Array<ExampleOutputItems>;
}