import SoftPosBakendApi from '../../../../../../../utils/api/SoftPosApi/BackendApiList';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { Modal } from 'react-responsive-modal';


const OpenDetailPopup = ({ acquirerDataObject,onClose }) => {
    useEffect(() => {
        fetchAllData();
    }, [])

    const fetchAllData = async () => {
        console.log(" Triggered")
        if (acquirerDataObject !== undefined) {
            var acquirerId = acquirerDataObject.acquirerId;

            var Object = {
                "acquirerId": acquirerId,
            }
            const response = await SoftPosBakendApi.uiConfigApis.GetThemeUiConfigById(Object)
            console.log(response);
            if (response.status === 200 && response.data.statusCode === 200) {
                if (response.data.map !== null) {
                    if (response.data.map.materialThemeTwo) {
                        setMaterialThemeTwo(response.data.map.materialThemeTwo);
                    }

                    if (response.data.map.materialThemeThree) {
                        setMaterialThemeThree(response.data.map.materialThemeThree);
                    }

                    if (response.data.map.imageSliders) {
                        setImageSliders(response.data.map.imageSliders)
                    }
                    setOpen(true)
                }
            } else {
                window.alert(`No Record Found`);
            }
        }
      }


    const [materialThemeThree, setMaterialThemeThree] = useState(null);
    const [materialThemeTwo, setMaterialThemeTwo] = useState(null);
    const [imageSliders, setImageSliders] = useState([]);
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
        onClose();
    }
 
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <div >
                <div>
                    <h4>Material Theme Two</h4>
                    {materialThemeTwo &&
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th >acquirerId</th>
                                    <th >background</th>
                                    <th>error</th>
                                    <th>lightRequired</th>
                                    <th>onBackground</th>
                                    <th>onError</th>
                                    <th>onPrimary</th>
                                    <th>onSecondary</th>
                                    <th>onSurface</th>
                                    <th>primary1</th>
                                    <th>primaryColour</th>
                                    <th>primaryVariant</th>
                                    <th>secondary</th>
                                    <th>secondaryVariant</th>
                                    <th>surface</th>
                                </tr>
                            </thead>{
                                <tbody>
                                    {materialThemeTwo && materialThemeTwo.map(item => (
                                        <tr key={item.guid}>
                                            <td>{item.acquirerId}</td>
                                            <td>{item.background}</td>
                                            <td>{item.error}</td>
                                            <td>{item.lightRequired === true ? 'True' : 'False'} </td>
                                            <td>{item.onBackground}</td>
                                            <td>{item.onError}</td>
                                            <td>{item.onPrimary}</td>
                                            <td>{item.onSecondary}</td>
                                            <td>{item.onSurface}</td>
                                            <td>{item.primary1}</td>
                                            <td>{item.primaryColour}</td>
                                            <td>{item.primaryVariant}</td>
                                            <td>{item.secondary}</td>
                                            <td>{item.secondaryVariant}</td>
                                            <td>{item.surface}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            }
                        </Table>
                    }
                </div>
                {materialThemeThree != null &&
                    <div>
                        <h4>Material Theme Three</h4>
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th >acquirerId</th>
                                    <th >background</th>
                                    <th>error</th>
                                    <th>lightRequired</th>
                                    <th>onBackground</th>
                                    <th>onError</th>
                                    <th>onSecondary</th>
                                    <th>onSurface</th>
                                    <th>primary1</th>
                                    <th>primaryColour</th>
                                    <th>primaryVariant</th>
                                    <th>secondary</th>
                                    <th>secondaryVariant</th>
                                    <th>surface</th>
                                </tr>
                            </thead>{
                                <tbody>
                                    {materialThemeThree && materialThemeThree.map(item => (
                                        <tr key={item.guid}>
                                            <td>{item.acquirerId}</td>
                                            <td>{item.background}</td>
                                            <td>{item.error}</td>
                                            <td>{item.lightRequired === true ? 'True' : 'False'} </td>
                                            <td>{item.onBackground}</td>
                                            <td>{item.onError}</td>
                                            <td>{item.onPrimary}</td>
                                            <td>{item.onSecondary}</td>
                                            <td>{item.onSurface}</td>
                                            <td>{item.primary1}</td>
                                            <td>{item.primaryColour}</td>
                                            <td>{item.primaryVariant}</td>
                                            <td>{item.secondary}</td>
                                            <td>{item.secondaryVariant}</td>
                                            <td>{item.surface}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            }
                        </Table>

                    </div>
                }
                <div>
                    <h4>Image Sliders</h4>
                    {imageSliders &&
                        <Table responsive hover>
                            <thead>
                                <tr>
                                    <th >acquirerId</th>
                                    <th >imageId</th>
                                    <th >imagePath</th>
                                </tr>
                            </thead>{
                                <tbody>
                                    {imageSliders && imageSliders.map(item => (
                                        <tr key={item.guid}>
                                            <td>{item.acquirerId}</td>
                                            <td>{item.imageId}</td>
                                            <td>{item.imagePath}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            }
                        </Table>
                    }
                </div>




            </div>
        </Modal>
    )
}
export default OpenDetailPopup;