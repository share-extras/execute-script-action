<#assign el=args.htmlid?html>
<div id="${el}-dialog" class="execute-script-dialog">
   <div id="${el}-dialogTitle" class="hd">${msg("title")}</div>
   <div class="bd">
      <form id="${el}-form" action="" method="post">
         <div class="yui-gd">
            <div class="yui-u first"><label for="${el}-script">${msg("label.script")}:</label></div>
            <div class="yui-u">
               <select id="${el}-script" type="text" name="script" tabindex="0">
                  <option value="-">${msg("label.select")}</option>
               <#list scripts as s>
                  <option value="${s.nodeRef}">${s.displayName}</option>
               </#list>
               </select>&nbsp;*
            </div>
         </div>
         <div class="bdft">
            <input type="button" id="${el}-ok" value="${msg("button.ok")}" tabindex="0" />
            <input type="button" id="${el}-cancel" value="${msg("button.cancel")}" tabindex="0" />
         </div>
      </form>
   </div>
</div>