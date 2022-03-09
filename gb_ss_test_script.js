/**
 * @NApiVersion 2.1
 * @NScriptType ScheduledScript
 */
define(['N/record', 'N/search'],
    /**
 * @param{record} record
 * @param{search} search
 */
    (record, search) => {

        /**
         * Defines the Scheduled script trigger point.
         * @param {Object} scriptContext
         * @param {string} scriptContext.type - Script execution context. Use values from the scriptContext.InvocationType enum.
         * @since 2015.2
         */
        const execute = (scriptContext) =>
        {

            try
            {
                /*
                    let customer = record.load(
                        {
                            id   : 262738,
                            type : record.Type.CUSTOMER
                        }
                    );

                    let entity_id = customer.getValue(
                        {
                            fieldId : 'entityid'
                        }
                    );

                    let sales_rep_id = customer.getValue(
                        {
                            fieldId : 'salesrep'
                        }
                    );

                    let sales_rep_name = customer.getText(
                        {
                            fieldId : 'salesrep'
                        }
                    );

                    log.debug({
                        title: 'entity_id',
                        details : entity_id
                    });

                    log.debug({
                        title: 'sales_rep_id',
                        details : sales_rep_id
                    });

                    log.debug({
                        title: 'sales_rep_name',
                        details : sales_rep_name
                    });
                */

                let employee = record.load({
                    id : 262735,
                    type : record.Type.EMPLOYEE
                });

                let entity_id = employee.getValue({
                    fieldId : 'entityid'
                })

                let employee_name = employee.getValue({
                    fieldId : 'firstname'
                })

                let employee_job_title = employee.getValue({
                    fieldId : 'title'
                });

                let employee_department_id = employee.getValue({
                    fieldId : 'department'
                });

                let employee_department_name = employee.getText({
                    fieldId : 'department'
                });

                let employee_location_id = employee.getValue({
                    fieldId : 'location'
                })

                let employee_location_name = employee.getText({
                    fieldId : 'location'
                })

                let employee_image_id = employee.getValue({
                    fieldId : 'image'
                })

                let employee_image_name = employee.getText({
                    fieldId : 'image'
                })

                log.debug({
                    title : 'employee_location_id',
                    details : employee_location_id
                })

                log.debug({
                    title : 'employee_location_name',
                    details : employee_location_name
                })

                log.debug({
                    title : 'employee_image_id',
                    details : employee_image_id
                })

                log.debug({
                    title : 'employee_image_name',
                    details : employee_image_name
                })

                log.debug({
                    title : 'employee_department_id',
                    details : employee_department_id
                })

                log.debug({
                    title : 'employee_department_name',
                    details : employee_department_name
                })

                log.debug({
                    title : 'entity_id',
                    details : entity_id
                })
                log.debug({
                    title : 'employee_name',
                    details : employee_name
                })

                log.debug({
                    title : 'employee_job_title',
                    details : employee_job_title
                })

            }
            catch (e)
            {
                log.error({
                    title: 'error',
                    details: e
                })
            }

        }
        return {execute}

    });
