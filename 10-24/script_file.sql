create table event (
	name VARCHAR(20), 
	date DATE,
	type VARCHAR(15),
	remark VARCHAR(255)
);

show tables;

LOAD DATA LOCAL INFILE 'C:Users/cq/Desktop/daily summary/10-24/event.txt' INTO TABLE event;

select * from event;

select MOD(6,12); 

describe event;

show create table event;

EXPLAIN(select name from event);

