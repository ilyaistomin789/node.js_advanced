exports.getAbilities = async (req, res) => {
    const ability = req.ability.rules;//TODO fix
    req.ability.throwUnlessCan("read", "ability");
    res.json(ability);
}
