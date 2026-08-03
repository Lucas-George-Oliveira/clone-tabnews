function status(request, response) {
  response.status(200).json({ chave: "testãndo os ácentôs" });
}

export default status;
