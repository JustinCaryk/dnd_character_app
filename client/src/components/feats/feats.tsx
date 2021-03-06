import React, { useState } from 'react';
import { useAllFeatsQuery } from './../../generated/graphql'

interface FeatInterface {
    id: string
    name: string
    desc: string
    points: string[]
    prereq?: string
}

const Feats: React.FC = () => {

    const [focusedFeat, setFocusedFeat] = useState<FeatInterface | null>(null)
    const { data, loading } = useAllFeatsQuery()

    if (!data && loading) {
        return <div>...Loading</div>
    }

    const handleMethodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const feat = data?.allFeats?.feats.find(f => f?.id == event.target.value) as FeatInterface
        if (feat) {
            setFocusedFeat(feat)
        }
    }

    if (data && !focusedFeat) {
        const feat = data?.allFeats?.feats[0] as FeatInterface
        setFocusedFeat(feat)
    }
    if (data && data.allFeats && focusedFeat) {
        return (
            <div className="space-sequence-20">
                <div>
                    <select className="form-control" onChange={(e) => handleMethodChange(e)}>
                        {data.allFeats.feats.map(f => {
                            if (f) {
                                return (
                                    <option value={f.id} key={f.id}>{f.name}</option>
                                )
                            }
                            return null
                        })}
                    </select>
                </div>

                <div>
                    {focusedFeat.desc}
                </div>

                {focusedFeat.prereq ? (
                    <div>
                        Prerequisite: {focusedFeat.prereq}
                    </div>
                ) : null}

                {focusedFeat.points && focusedFeat.points.length > 0 &&
                    <ul>
                        {focusedFeat.points.map((p: string, i: number) => {
                            return (
                                <li key={i}>{p}</li>
                            )
                        })}
                    </ul>
                }
            </div>

        )
    }

    return null
}

export default Feats
