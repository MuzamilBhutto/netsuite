/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['N/url'],

    /**
     *
     * @param {url} url
     * @returns {{beforeLoad: beforeLoad}}
     */
    (url) => {


        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {

            function add_blue_diamond_print_label_button(add_blue_diamond_print_label_button) {
                try
                {
                    let suitelet_url = url.resolveScript({
                        scriptId 		: add_blue_diamond_print_label_button.script,
                        deploymentId 	: add_blue_diamond_print_label_button.deploy,
                        params 		    :
                            {
                                order_id : add_blue_diamond_print_label_button.order_id
                            }
                    });

                    let domain_url = url.resolveDomain({
                        hostType: url.HostType.APPLICATION
                    });

                    let complete_url = 'https://' + domain_url + suitelet_url ;
                    let title = add_blue_diamond_print_label_button.page_title ;
                    let popup = 'popup' ;

                    let script = "window.open('" + complete_url + "','" + title + "','" + popup + "')" ;


                    log.debug({title: 'complete_url', details: script});
                    scriptContext.form.addButton({
                        id: add_blue_diamond_print_label_button.button_id,
                        label: add_blue_diamond_print_label_button.button_label,
                        functionName: script
                    });
                }
                catch (e) {
                    log.error({title: '::Error::', details: e});
                }
            }

            try
            {
                let form                = scriptContext.form                        ;
                let context_type        = scriptContext.type                        ;
                let record              = scriptContext.newRecord                   ;
                let order_id            = record.id                                 ;
                let entity_id           = record.getValue({fieldId: 'entity'})      ;

                log.debug({title:'Order_ID', details: order_id});
                log.debug({title:'Entity_ID', details: entity_id});
                if(context_type  === scriptContext.UserEventType.VIEW && entity_id === '89453')
                {
                    let blue_diamond_print_button_info = {
                        script      : 'customscript_gb_sl_bd_print_preview',
                        deploy      : 'customdeploy_gb_sl_bd_print_preview',
                        form        : form,
                        order_id    : order_id,
                        button_id   : 'custpage_bd_print_label',
                        button_label: 'BD Ship Label',
                        page_title  : 'Blue Diamond Label Printing'
                    };

                    add_blue_diamond_print_label_button(blue_diamond_print_button_info);
                }
            }
            catch (e)
            {
                log.error({title: '::Error::', details: e});
            }
        }

        return {
            beforeLoad
        }

    });
