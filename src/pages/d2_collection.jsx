import CollectionLayout from "../components/CollectionLayout";
import data from "../data/data.json";

const ByMission= () => {
    return(
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="space-y-8">
                <CollectionLayout
                data = {data}
                tabField = "mission"
                groupField= "type"
                startTab = "All"
                />
            </div>
        </div>
    )
}

const ByType= () => {
    return(
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="space-y-8">
                <CollectionLayout
                data = {data}
                tabField = "type"
                groupField= "mission"
                startTab = "All"
                />
            </div>
        </div>
    )
}

export {ByMission ,ByType};