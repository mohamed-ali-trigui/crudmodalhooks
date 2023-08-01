import React from 'react'

import { MaterialReactTable } from 'material-react-table'; // ya3mel l map wa7dou
                                                            //useMemo conserver le tableau
                                                            //composant pere et fils : kif state tetbadel return t3awed(marbout bil pere)
                                                            //kif state products yetbadel akahaw yissir changement
                                                            //useMemo
const ArticleList = ({products}) => {
  return (
    <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Référence</th>
                    <th>Désignation</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((pr,index) =>

                )}
            </tbody>
        </Table>
    </div>
  )
}

export default ArticleList
