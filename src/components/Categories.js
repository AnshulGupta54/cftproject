import classes from './Categories.module.css';
import RocketIcon from '@mui/icons-material/Rocket';
import TerrainIcon from '@mui/icons-material/Terrain';
import GiteIcon from '@mui/icons-material/Gite';
const Categories=()=>{
    return <section className={classes.list}>
        <div>
            <button>
                <RocketIcon />
                <div>
                    OMG
                </div>
            </button>
        </div>
        <div>
            <button>
                <TerrainIcon />
                <div>
                    National parks
                </div>
            </button>
        </div>
        <div>
            <button>
                <GiteIcon />
                <div>
                    Tiny homes
                </div>
            </button>
        </div>
        <div>
            <button>
                <TerrainIcon />
                <div>
                    Islands
                </div>
            </button>
        </div>
        <div>
            <button>
                <GiteIcon />
                <div>
                    Camping
                </div>
            </button>
        </div>
        <div>
            <button>
                <TerrainIcon />
                <div>
                    Camping
                </div>
            </button>
        </div>
        <div>
            <button>
                <RocketIcon />
                <div>
                    Tiny homes
                </div>
            </button>
        </div>
    </section>
}
export default Categories;