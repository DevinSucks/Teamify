const users = [{_id:{"$oid":"6618ff6168a88c87ebf40f4c"},"name":"demo","email":"demoUser@gmail.com","password":"$2a$10$MYGOvHwWDcrW5chdiJpPguxBVBJ8/G3dsdQC0ROiFdovgvUvcLaZ.","coins":{"$numberInt":"0"},"streak":{"$numberInt":"1"},"tasks":[{"$oid":"661904d968a88c87ebf40f63"},{"$oid":"6619053268a88c87ebf40f6b"}],"teams":[{"$oid":"661903a768a88c87ebf40f5a"}],"createdAt":{"$date":{"$numberLong":"1712914273090"}},"updatedAt":{"$date":{"$numberLong":"1712915762399"}},"__v":{"$numberInt":"0"}},
    {_id:{"$oid":"6619024868a88c87ebf40f50"},"name":"Harsh Agrawal","email":"hpkagr494@gmail.com","password":"$2a$10$0/Lqy6h8loeiuSlYEwJL7OoySHGYsw9BFyc3.eJnqd8z6g3p4c83O","coins":{"$numberInt":"0"},"streak":{"$numberInt":"1"},"tasks":[{"$oid":"661904d968a88c87ebf40f63"}],"teams":[{"$oid":"661903a768a88c87ebf40f5a"}],"createdAt":{"$date":{"$numberLong":"1712915016287"}},"updatedAt":{"$date":{"$numberLong":"1712915673452"}},"__v":{"$numberInt":"0"}},
    {_id:{"$oid":"6619028e68a88c87ebf40f53"},"name":"Harsh Parmar","email":"harshitpar2003@gmail.com","password":"$2a$10$ikin1LLYhpfIN51WkJf51eY6r4dp3SSQ.BZW97VSnZI/PYrMJOHbK","organisation":"amazon","coins":{"$numberInt":"0"},"streak":{"$numberInt":"1"},"tasks":[],"teams":[{"$oid":"661903a768a88c87ebf40f5a"}],"createdAt":{"$date":{"$numberLong":"1712915086626"}},"updatedAt":{"$date":{"$numberLong":"1712915368303"}},"__v":{"$numberInt":"0"}},
    {_id:{"$oid":"661902e768a88c87ebf40f56"},"name":"Harsh Mittal","email":"mittal2004@gmail.com","password":"$2a$10$TQ3hcH4SNJq4h36X7YSewuFdb6UjQHG/QU/JvhsmjitqtUEiABNnG","coins":{"$numberInt":"0"},"streak":{"$numberInt":"1"},"tasks":[],"teams":[],"createdAt":{"$date":{"$numberLong":"1712915175473"}},"updatedAt":{"$date":{"$numberLong":"1712915175473"}},"__v":{"$numberInt":"0"}}
]

const tasks= [
    {_id:{"$oid":"661904d968a88c87ebf40f63"},"title":"Web dev frontend","date":{"$date":{"$numberLong":"1712913964983"}},"priority":"high","coinsAlloted":{"$numberInt":"100"},"stage":"todo","activities":[{"type":"assigned","activity":"New task has been assigned to you The task priority is set a high priority, so check and act accordingly. The task date is Invalid Date. Thank you!!!","date":{"$date":{"$numberLong":"1712913964983"}},"by":{"$oid":"661902e768a88c87ebf40f56"},"_id":{"$oid":"661904d968a88c87ebf40f64"}}],"assets":[],"members":[{"$oid":"6618ff6168a88c87ebf40f4c"},{"$oid":"6619024868a88c87ebf40f50"}],"createdAt":{"$date":{"$numberLong":"1712915673217"}},"updatedAt":{"$date":{"$numberLong":"1712915673217"}},"__v":{"$numberInt":"0"}},
    {_id:{"$oid":"6619053268a88c87ebf40f6b"},"title":"Web dev database","date":{"$date":{"$numberLong":"1720031400000"}},"priority":"medium","coinsAlloted":{"$numberInt":"75"},"stage":"todo","activities":[{"type":"assigned","activity":"New task has been assigned to you The task priority is set a medium priority, so check and act accordingly. The task date is Thu Jul 04 2024. Thank you!!!","date":{"$date":{"$numberLong":"1712913964983"}},"by":{"$oid":"661902e768a88c87ebf40f56"},"_id":{"$oid":"6619053268a88c87ebf40f6c"}}],"assets":[],"members":[{"$oid":"6618ff6168a88c87ebf40f4c"}],"createdAt":{"$date":{"$numberLong":"1712915762250"}},"updatedAt":{"$date":{"$numberLong":"1712915762250"}},"__v":{"$numberInt":"0"}}
]

const teams = [
    {_id:{"$oid":"661904d968a88c87ebf40f63"},"title":"Web dev frontend","date":{"$date":{"$numberLong":"1712913964983"}},"priority":"high","coinsAlloted":{"$numberInt":"100"},"stage":"todo","activities":[{"type":"assigned","activity":"New task has been assigned to you The task priority is set a high priority, so check and act accordingly. The task date is Invalid Date. Thank you!!!","date":{"$date":{"$numberLong":"1712913964983"}},"by":{"$oid":"661902e768a88c87ebf40f56"},"_id":{"$oid":"661904d968a88c87ebf40f64"}}],"assets":[],"members":[{"$oid":"6618ff6168a88c87ebf40f4c"},{"$oid":"6619024868a88c87ebf40f50"}],"createdAt":{"$date":{"$numberLong":"1712915673217"}},"updatedAt":{"$date":{"$numberLong":"1712915673217"}},"__v":{"$numberInt":"0"}},
    {_id:{"$oid":"6619053268a88c87ebf40f6b"},"title":"Web dev database","date":{"$date":{"$numberLong":"1720031400000"}},"priority":"medium","coinsAlloted":{"$numberInt":"75"},"stage":"todo","activities":[{"type":"assigned","activity":"New task has been assigned to you The task priority is set a medium priority, so check and act accordingly. The task date is Thu Jul 04 2024. Thank you!!!","date":{"$date":{"$numberLong":"1712913964983"}},"by":{"$oid":"661902e768a88c87ebf40f56"},"_id":{"$oid":"6619053268a88c87ebf40f6c"}}],"assets":[],"members":[{"$oid":"6618ff6168a88c87ebf40f4c"}],"createdAt":{"$date":{"$numberLong":"1712915762250"}},"updatedAt":{"$date":{"$numberLong":"1712915762250"}},"__v":{"$numberInt":"0"}}

]