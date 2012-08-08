{
   items: [<#list results as result>{
      nodeRef: "${result.nodeRef}",
      displayName: "${result.properties.title!result.name}"
   }<#if result_has_next>,</#if></#list>
   ]
}