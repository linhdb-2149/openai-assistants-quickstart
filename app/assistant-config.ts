export let assistantId = "asst_iiSL9xKkNfkxHkD30t7EJLVG"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
