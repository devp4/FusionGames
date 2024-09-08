import { Text, Badge, Button, Group, Box } from '@mantine/core';

function LobbyCard() {
  return (
    <Box p={20} style={{ borderRadius: "10px", border: "1px solid #424242", backgroundColor: "#2e2e2e" }}>
      <Text style={{fontSize: "130%", borderBottom: "2px solid #424242", paddingBottom: "3%" }} 
				fw="bold" 
				truncate="end" 
				c={"white"}>
				this is my room name
			</Text>

			<Group 
				justify="space-between" 
				mt="md" 
				mb="xs"
				style={{
					fontSize: "100%", 
					borderBottom: "2px solid #424242",
					paddingBottom: "3%",
				}} 
			>
        <Text 
					style={{
						fontSize: "105%"
					}} 
					truncate="end" 
					fw={500} 
					c="white">Guess It</Text>
        <Badge 
					style={{
						fontSize: "100%",
						padding: "12px"
					}} 
					color="#3ba55c">
					20 / 20
				</Badge>
      </Group>
			
			<div style={{ textAlign: "center" }}>
				<Button w={"30%"} radius="lg" size='xs'>
					JOIN
				</Button>
			</div>
    </Box>
  );
}

export default LobbyCard