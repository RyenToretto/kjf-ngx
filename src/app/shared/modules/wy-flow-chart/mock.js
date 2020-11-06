const flowChartData = {
  "rule_id": "xxxxxxxxxxxxxx",
  "element_id": "服务端生成的内部ID",
  "element_type": "trigger",
  "element_name": "trigger_1",
  "isDeleted": false,
  "is_root": 1,
  "directives": {
    "key_1": "value_1"
  },
  "next_step": {
    "rule_id": "xxxxxxxxxxxxxxxxx",
    "element_id": undefined, // 如果服务端有返回就应该传给我， 没有就是 undefined
    "element_type": "action",
    "element_name": "action_1", // wy 树结点 标题
    "is_root": 0,
    "directives": {}
  },
  "next_steps": []
}
