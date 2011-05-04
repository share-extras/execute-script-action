/**
 * Document library Execute Script action
 * 
 * @namespace Alfresco
 * @class Alfresco.doclib.Actions
 */
(function()
{
   /**
    * YUI Library aliases
    */
   var Dom = YAHOO.util.Dom,
      Event = YAHOO.util.Event;

   /**
    * Alfresco Slingshot aliases
    */
   var $html = Alfresco.util.encodeHTML,
      $combine = Alfresco.util.combinePaths;
   
   /**
    * Execute a script against a document.
    *
    * @method onActionExecuteScript
    * @param asset {object} Object literal representing one or more file(s) or folder(s) to be actioned
    */
   Alfresco.doclib.Actions.prototype.onActionExecuteScript = function DL_onActionExecuteScript(asset)
   {
      var nodeRef = asset.nodeRef,
         displayName = asset.displayName,
         actionUrl = Alfresco.constants.PROXY_URI + $combine("slingshot/doclib/action/execute-script/node", nodeRef.replace(":/", ""));
      
      // Always create a new instance
      this.modules.executeScript = new Alfresco.module.SimpleDialog(this.id + "-executeScript").setOptions(
      {
         width: "30em",
         templateUrl: Alfresco.constants.URL_SERVICECONTEXT + "extras/modules/documentlibrary/execute-script",
         actionUrl: actionUrl,
         firstFocus: this.id + "-executeScript-script",
         onSuccess:
         {
            fn: function dlA_onActionExecuteScript_success(response)
            {
               // TODO Persist script to prefs service
               YAHOO.Bubbling.fire("metadataRefresh",
               {
                  highlightFile: displayName
               });
               Alfresco.util.PopupManager.displayMessage(
               {
                  text: this.msg("message.execute-script.success", displayName)
               });
            },
            scope: this
         },
         onFailure:
         {
            fn: function dlA_onActionExecuteScript_failure(response)
            {
               Alfresco.util.PopupManager.displayMessage(
               {
                  text: this.msg("message.execute-script.failure", displayName)
               });
            },
            scope: this
         },
         doSetupFormsValidation:
         {
            fn: function dlA_onActionExecuteScript_doSetupFormsValidation(p_form)
            {
               // Validation
               p_form.addValidation(this.id + "-executeScript-script", function fnValidateType(field, args, event, form, silent, message)
               {
                  return field.options[field.selectedIndex].value !== "-";
               }, null, "change");
               p_form.setShowSubmitStateDynamically(true, false);
               // TODO Retrieve last-actioned script from prefs service
            },
            scope: this
         }
      });
      this.modules.executeScript.show();
   };
})();
