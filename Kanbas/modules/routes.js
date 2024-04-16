import * as dao from "./dao.js";

export default function moduleRoutes(app) {
  app.get("/api/modules", async (req, res) => {
    const modules = Database.modules;
    res.send(modules);
  });

  app.get("/api/modules/:id", async (req, res) => {
    const { id } = req.params;
    const module = await dao.findModuleById(id);
    if (!module) {
      res.status(404).send("module not found");
      return;
    }
    res.send(module);
  });

  app.get("/api/coursemodules/:cid", async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findModuleByCourse(cid);
    res.send(modules);
  });

  app.delete("/api/modules/:id", async (req, res) => {
    const { id } = req.params;
    await dao.deleteModule(id);
    res.sendStatus(204);
  });

  app.put("/api/modules/:mid", async (req, res) => {
    const { mid } = req.params;
    const module = req.body;
    delete module._id;
    const moduleIndex = await dao.updateModule(mid, module)
    res.sendStatus(204);
  });

  app.post("/api/coursemodules/:cid", async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      course: cid,
    };
    await dao.createModule(newModule);
    res.send(newModule);
  });
}
