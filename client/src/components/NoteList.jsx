import { Card, CardContent, Grid, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link, Outlet } from "react-router-dom";

const NoteList = () => {
    const folder = { notes: [{ id: 1, content: "<i>Hello test</i>" }] };

    return (
        <Grid container height="100%">
            <Grid
                item
                xs={4}
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "#F0EBE3",
                    height: "100%",
                    overflow: "auto",
                    padding: "10px",
                    textAlign: "left",
                }}
            >
                <List
                    subheader={
                        <Box>
                            <Typography sx={{ fontWeight: "bold" }}>Notes</Typography>
                        </Box>
                    }
                >
                    {folder.notes.map(({ id, content }) => (
                        <Link
                            key={id}
                            to={`note/${id}`}
                            style={{ textDecoration: "none" }}
                        >
                            <Card sx={{ mb: "5px" }}>
                                <CardContent
                                    sx={{
                                        "&:last-child": { pb: "10px" },
                                        padding: "10px",
                                    }}
                                >
                                    <div
                                        style={{ fontSize: 14, fontHeight: "bold" }}
                                        dangerouslySetInnerHTML={{
                                            __html: `${
                                                content.substring(0, 30) || "Empty"
                                            }`,
                                        }}
                                    />
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </List>
            </Grid>
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default NoteList;
