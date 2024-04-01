import Database from "../Database/index.js";
export default function moduleRoutes(app) {
  app.get("/api/modules", (req, res) => {
    const modules = Database.modules;
    res.send(modules);
  });

  app.get("/api/modules/:id", (req, res) => {
    const { id } = req.params;
    const module = Database.modules.find((c) => c._id === id);
    if (!module) {
      res.status(404).send("module not found");
      return;
    }
    res.send(module);
  });

  app.get("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const modules = Database.modules.filter((m) => m.course === cid);
    res.send(modules);
  });

  app.delete("/api/modules/:id", (req, res) => {
    const { id } = req.params;
    Database.modules = Database.modules.filter((c) => c._id !== id);
    res.sendStatus(204);
  });

  app.put("/api/modules/:mid", (req, res) => {
    const { mid } = req.params;
    const moduleIndex = Database.modules.findIndex((m) => m._id === mid);
    Database.modules[moduleIndex] = {
      ...Database.modules[moduleIndex],
      ...req.body,
    };
    res.sendStatus(204);
  });

  app.post("/api/courses/:cid/modules", (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
      _id: new Date().getTime().toString(),
    };
    Database.modules.push(newModule);
    res.send(newModule);
  });
}
