function main()
{
   var json = remote.call("/slingshot/doclib/doclist/documents/node/alfresco/company/home/Data%20Dictionary/Scripts"),
      jsonObj = eval('(' + json + ')'),
      items = jsonObj.items;
   
   model.scripts = items;
}

main();