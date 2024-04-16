import * as dao from "./dao.js";

export default function CourseRoutes(app) {
  app.get("/api/courses", async (req, res) => {
    const courses = await dao.findAllCourses();
    res.send(courses);
  });

  app.get("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = await dao.findCourseById(id);
    if (!course) {
      res.status(404).send("Course not found");
      return;
    }
    res.send(course);
  });

  app.post("/api/courses", async (req, res) => {
    const course = req.body;
    const findCourse = await dao.findCourseByNumber(course.number)
    if (findCourse) {
      res.sendStatus(400)
    } else {
      const newCourse = await dao.createCourse(course);
      res.send(newCourse);
    }
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const id = req.params.id;
    const status = await dao.deleteCourse(id)
    res.send(status);
  });

  app.put("/api/courses/:id", async (req, res) => {
    const id = req.params.id;
    const course = req.body;
    delete course._id;
    const status = await dao.updateCourse(id, course);
    res.send(status);
  });
}
