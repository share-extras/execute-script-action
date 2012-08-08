function main()
{
   var json = remote.call("/extras/doclib/action/list-scripts"),
      jsonObj = eval('(' + json + ')'),
      items = jsonObj.items;
   
   model.scripts = items;
}

main();