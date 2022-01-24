var express = require("express");
var router = express.Router();

const models = require("../models");
const user_game_biodata = require("../models/user_game_biodata");
const userGameModel = models.user_game;
const userGameBiodataModel = models.user_game_biodata;
const userGameHistoryModel = models.user_game_history;

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const userGame = await userGameModel.findAll({
    include: ["user"], //sama dengan yang ada pada model di assosciate pada "as"
  });
  res.json(userGame);
});

router.get("/biodata", async function (req, res, next) {
  const userGameBiodata = await userGameBiodataModel.findAll({
    include: ["userpengguna"], //sama dengan yang ada pada model di assosciate pada "as"
  });
  const userMapped = userGameBiodata.map((item) => {
    return {
      id: item.id,
      name: item.userpengguna.name,
      hobby: item.hobby,
      age: item.userpengguna.age,
    };
  });
  res.json(userMapped);
});

router.get("/history", async function (req, res, next) {
  const userGameHistory = await userGameHistoryModel.findAll({
    include: ["userpengguna"], //sama dengan yang ada pada model di assosciate pada "as"
  });
  // const userMapped = userGameBiodata.map((item) => {
  //   return {
  //     id: item.id,
  //     name: item.userpengguna.name,
  //     hobby: item.hobby,
  //     age: item.userpengguna.age,
  //   };
  // });
  res.json(userGameHistory);
});

router.get("/:id", async function (req, res) {
  const userGameid = parseInt(req.params.id);
  const detailOfuserGame = await userGameModel.findByPk(userGameid);
  res.json(detailOfuserGame);
});

router.post("/", async function (req, res) {
  const name = req.body.name;
  const age = req.body.age;
  const address = req.body.address;

  try {
    await userGameModel
      .create({
        name: name,
        age: age,
        address: address,
      })
      .then(function (userGameModel) {
        res.send(userGameModel);
      });
  } catch (error) {
    res.status(500).json({
      error: error.parent.sqlMessage,
    });
  }
});

router.delete("/:id", async function (req, res) {
  const userGameid = parseInt(req.params.id);
  try {
    const companiesById = await userGameModel.findByPk(userGameid);
    if (!companiesById)
      res.status(500).json({
        error: "Data tidak di temukan",
      });
    await userGameModel
      .destroy({
        where: {
          id: userGameid,
        },
      })
      .then(function (companiesDeleted) {
        res.send({
          message: `Success delete data by id ${userGameid}`,
        });
      });
  } catch (error) {
    res.status(500).json({
      error: error.parent.sqlMessage,
    });
  }
});

router.put("/:id", async (req, res) => {
  const userGameid = parseInt(req.params.id);
  try {
    const companiesById = userGameModel.findByPk(userGameid);
    if (!companiesById)
      res.status(500).json({
        error: "data user tidak ditemukan",
      });

    const name = req.body.name;
    const age = req.body.age;
    const address = req.body.address;

    await userGameModel
      .update(
        {
          name: name,
          age: age,
          address: address,
        },
        {
          where: {
            id: userGameid,
          },
        }
      )
      .then(function (data) {
        res.json({
          message: "data user telah berhasil diupdate",
          data: {
            name: name,
            age: age,
            address: address,
          },
        });
      });
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

module.exports = router;
