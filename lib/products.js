const S=['S','M','L','XL','2XL'];
const P=(slug,title,cat,price,type,bg,fg,desc,sizes)=>({slug,title,cat,price,type,bg,fg,desc,sizes:sizes||null});
export const products=[
P('hooyo-heavyweight-hoodie','Hooyo Heavyweight Hoodie','Apparel',58,'hoodie','#0A1A2B','#E5A93C','Heavyweight fleece hoodie with the ABOOWE mark embroidered on the chest. Brushed inside, roomy fit.',S),
P('dayax-crewneck','Dayax Crewneck','Apparel',49,'hoodie','#4189DD','#FFFFFF','Soft midweight crewneck sweatshirt with a tonal ABOOWE print.',S),
P('xamar-tee','Xamar Tee','Apparel',34,'tee','#F2EDE3','#0A1A2B','Ringspun cotton tee with a small ABOOWE chest print and woven neck label.',S),
P('geeska-oversized-tee','Geeska Oversized Tee','Apparel',36,'tee','#E5A93C','#0A1A2B','Boxy oversized tee cut for layering. Large ABOOWE print on the back.',S),
P('nabad-long-sleeve','Nabad Long Sleeve','Apparel',38,'tee','#1B3550','#FFFFFF','Long sleeve tee in dense cotton jersey with an ABOOWE sleeve print.',S),
P('kuul-dad-cap','Kuul Dad Cap','Headwear',29,'cap','#0A1A2B','#FFFFFF','Unstructured cotton twill cap with embroidered ABOOWE wordmark and brass buckle.'),
P('barwaaqo-beanie','Barwaaqo Beanie','Headwear',26,'beanie','#4189DD','#FFFFFF','Cuffed knit beanie with a woven ABOOWE patch.'),
P('geel-stoneware-mug','Geel Stoneware Mug','Home',19,'mug','#F2EDE3','#0A1A2B','11 oz ceramic mug, dishwasher safe, ABOOWE mark on both sides.'),
P('baraf-enamel-mug','Baraf Enamel Camp Mug','Home',22,'mug','#4189DD','#FFFFFF','Lightweight enamel camp mug with a steel rim. Made for travel and long tea breaks.'),
P('hoyga-throw-pillow','Hoyga Throw Pillow','Home',32,'pillow','#E5A93C','#0A1A2B','18 in square pillow with a hidden zip and a bold ABOOWE print.'),
P('xaaf-throw-blanket','Xaaf Throw Blanket','Home',62,'pillow','#1B3550','#E5A93C','Plush woven throw, 50 x 60 in, with a stitched ABOOWE corner label.'),
P('shaah-tumbler','Shaah Tumbler','Home',28,'bottle','#0A1A2B','#E5A93C','20 oz insulated stainless tumbler. Keeps tea hot for hours.'),
P('nabad-poster','Nabad Poster','Prints',27,'poster','#F2EDE3','#0A1A2B','Museum-quality matte poster, 18 x 24 in. Printed on thick archival paper.'),
P('dayax-poster','Dayax Poster','Prints',27,'poster','#0A1A2B','#E5A93C','Matte poster, 18 x 24 in, in navy and gold.'),
P('geel-poster','Geel Poster','Prints',27,'poster','#4189DD','#FFFFFF','Matte poster, 18 x 24 in, in sky blue.'),
P('framed-heritage-print','Framed Heritage Print','Prints',54,'poster','#F2EDE3','#4189DD','Framed 12 x 16 in print with a wood frame and acrylic glaze, ready to hang.'),
P('canvas-wall-art','Canvas Wall Art','Prints',68,'poster','#E5A93C','#0A1A2B','Gallery-wrapped 16 x 20 in canvas on a solid wood frame.'),
P('dhaqan-organic-tote','Dhaqan Organic Tote','Accessories',24,'tote','#F2EDE3','#0A1A2B','Organic cotton tote with reinforced handles and a large ABOOWE print.'),
P('ABOOWE-notebook','ABOOWE Notebook','Accessories',18,'notebook','#0A1A2B','#FFFFFF','Hardcover notebook with 80 lined pages and a foil-look ABOOWE cover.'),
P('safar-water-bottle','Safar Water Bottle','Accessories',30,'bottle','#4189DD','#FFFFFF','24 oz stainless steel water bottle with a leakproof lid.'),
].map(p=>({...p,slug:p.slug.toLowerCase()}));
export const cats=['All','Apparel','Headwear','Home','Prints','Accessories'];
export const find=s=>products.find(p=>p.slug===s);
