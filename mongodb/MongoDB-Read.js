//db.mycoll.insertMany([
//	{ item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
//	{ item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
//	{ item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
//	{ item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
//	{ item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
//])

// 查询所有的行
// select * from mycoll;
db.mycoll.find({})

// 查询等于某一值的行
// select * from mycoll where item = 'notebook';
db.mycoll.find(
	{item: 'notebook'}
)

// Compression// $eq, $ne, $lt, $lte, $gt, $gte, $in, $nin
// {<filed>: {<operator>: <vaue1>}, ...}
// select * from mycoll where qty > 50
db. mycoll.find(
	{qty: {$gt: 50}}
)
// select * from mycoll where qty in (50, 75)
db.mycoll.find(
	{qty: {$in: [50, 75]}}
)

// Logical 
// $and, $or, $nor
// {<operator>: [{<expression1>}, {<expression2>}, ...]}
// select * from mycoll where qty >= 45 and status = 'A'
db.mycoll.find(
	{$and: [{qty: {$gte: 45}}, {status: 'A'}]}
)
// select * from mycoll where qty >= 45 or status = 'A'
db.mycoll.find(
	{$or: [{qty: {$gte: 45}}, {status: 'A'}]}
)
// select * from mycoll where not (qty >=75 or qty <=25)
db.mycoll.find(
	{$nor: [{qty: {$gte: 75}}, {qty: {$lte: 25}}]}
)
// 上面的示例等同于
db.mycoll.find(
	{
		$nor: [{$or: [{qty: {$gte: 75}}, {qty: {$lte: 25}}]}]
	}
)
// select * from mycoll where not (qty >= 45 and status = 'A')
db.mycoll.find(
	{
		$nor: [{$and: [{qty: {$gte: 45}}, {status: 'A'}]}]
	}
)


// 嵌套文档查询
// 精确匹配，顺序都不能错
//{<field>: {<sub_field1: <sub_value1>, <sub_field2>: <sub_value2>}}
db.mycoll.find(
	{
		size: {h: 8.5, w: 11, uom: "in"}
	}
)
// 使用“.”号引用子字段
db.mycoll.find(
	{'size.uom': 'cm'}
)

//db.mycoll.insertMany([
//	{ item: "journal", qty: 25, tags: ["blank", "red"], dim_cm: [ 14, 21 ] },
//	{ item: "notebook", qty: 50, tags: ["red", "blank"], dim_cm: [ 14, 21 ] },
//	{ item: "paper", qty: 100, tags: ["red", "blank", "plain"], dim_cm: [ 14, 21 ] },
//	{ item: "planner", qty: 75, tags: ["blank", "red"], dim_cm: [ 22.85, 30 ] },
//	{ item: "postcard", qty: 45, tags: ["blue"], dim_cm: [ 10, 15.25 ] },
//	{ item: "wood", qty: 15, tags: ["black", "green"], dim_cm: [25, 55.5]}
//])

// 查询数组
