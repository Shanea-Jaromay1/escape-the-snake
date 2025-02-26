// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100006060606060606060606060606060606060106060606060606060606060606060605040404040404040408060606050806020a0a0a0a0a0a0a0a090606060209040606060606060606060606060606060a060606060605040404040404080606060606060606020a0a0a0a0a0a0906060606060606060606060606060606060605040404040404040404040806060606020a0a0a0a0a0a0a0a0a0a090606060606060606060606060606060606060606040404060606040404040404040604080a0a090606060a0a0a0a0a0a0a060606040404080606060606060606060606060303030304060606060606060606060603030303030406060404040606040607`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
. 2 2 2 2 2 2 2 2 2 2 . . . 2 2 
2 . . . . . . . . . . . . . . . 
2 . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . . 2 2 2 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 . . . . 
. . . . . . . . . . . . . . . . 
2 2 2 . . . 2 2 2 2 2 2 2 . 2 2 
2 2 2 . . . 2 2 2 2 2 2 2 . . . 
2 2 2 2 . . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
2 2 2 2 2 2 . . 2 2 2 . . 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath7,sprites.castle.tilePath5,sprites.castle.tilePath2,sprites.castle.tilePath1,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
